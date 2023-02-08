//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Please Take my comments seriously

//  Test Beneficiaries
//  [[true, 0, 100, 2000, 5000, "First", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"], [true, 0, 100, 2000, 5000, "Second", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"]]
//  Update beneficiaries
//  index: [0]  
//  beneficiaries: [[true, 0, 100, 2000, 5000, "Third", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"]]
//  Add beneficiaries
//  [[true, 0, 100, 2000, 5000, "First", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"], [true, 0, 100, 2000, 5000, "Second", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"]]


// Please add the suitable guards to this code patch any vulnerability you find
// Please don't change the names or parameter of any function here if you must do that,
// please inform me so i update it on the front-end, add events to the contract,
// Add as many fuctions and variable as you need, 


contract Trustee is ReentrancyGuard, Ownable {

    struct Beneficiary {
        bool isNft;
        uint256 tokenId;
        uint256 amount;
        uint256 interval;
        uint256 deadline;
        string description;
        address beneficiaryAddress;
        address tokenAddress;
    }
    
    struct Trust {
        string title;
        uint256 interval;
        uint256 deadline;
        bool active;
        uint256 beneficiaryCount;
    }


    mapping(address => Trust) private TrustData;
    mapping(address => mapping(uint256 => Beneficiary)) private beneficiaryData;

    uint256 public subscriptionPrice = 1 ether;
    uint256 public pricePerBeneficiary = 0.001 ether;


    // This contract address is the one on our server, it's the address that interact with our contact from
    // time to time, my idea is that this contract should be credited with some percentage matic once a user pays
    // so that this address always have matic to pay for gas fees.
    address public automator;

    function createTrust (uint256 _interval, string calldata _title, Beneficiary[] calldata _beneficiaries) external {
        require (!TrustData[msg.sender].active, "Address can't have multiple active Trust");
        
        uint256 count = _beneficiaries.length;
        uint256 deadline = block.timestamp + _interval;

        for (uint256 i = 0; i < count; i++) {
            beneficiaryData[msg.sender][i] = _beneficiaries[i];
        }

        TrustData[msg.sender] = Trust(_title, _interval, deadline, true, count);

    }


    function getMyTrust () external view returns(Trust memory) {
        return TrustData[msg.sender];
    }


    // protect against indexes that are out of bound
    function updateMyTrustBeneficiaries (uint256[] calldata _indexes, Beneficiary [] calldata _beneficiaries) public {
        uint256 count = TrustData[msg.sender].beneficiaryCount;
        for (uint256 i = 0; i < _indexes.length; i++) {
            if (_indexes[i] > count) continue;
            beneficiaryData[msg.sender][_indexes[i]] = _beneficiaries[i];
        }
    }

    function addToMyTrustBeneficiaries (Beneficiary [] calldata _beneficiaries) public  {
        uint256 count = TrustData[msg.sender].beneficiaryCount;
        for (uint256 i = 0; i < _beneficiaries.length; i++) {
            beneficiaryData[msg.sender][count + i] = _beneficiaries[i];
        }
    }

    function getMyTrustBeneficiaries () public view returns(Beneficiary [] memory) {
        
        uint256 count = TrustData[msg.sender].beneficiaryCount;

        Beneficiary[] memory beneficiaries = new Beneficiary[](count);

        for (uint256 i = 0; i < count; i++) {
            beneficiaries[i] = beneficiaryData[msg.sender][i];
        }
        
        return beneficiaries;
    }


    //NFT Section
    function isNftApproved (address _nftAddress, uint256 _tokenId) public view returns(bool) {
        if (IERC721(_nftAddress).getApproved(_tokenId) != address(this)) {
            return false;
        } else {
            return true;
        }
    }

    //Token section
    function getApprovedTokens(address tokenAddress, address owner) public view returns(uint256) {
        return IERC20(tokenAddress).allowance(owner, address(this));
    }


    // Admin Functions
    function setSubcriptionPrice (uint256 _price) external onlyOwner {
        subscriptionPrice = _price;
    }

    function setPricePerBeneficiary (uint256 _price) external onlyOwner {
        pricePerBeneficiary = _price;
    }

    function setAutomator (address _automator) external onlyOwner {
        automator = _automator;
    }


    //  Codes that should be implemented
    //  You should add more and can change the names and paramenters of the functions

    // transfer asset to beneficiaries
    // implement for NFTs and Tokens
    function bulkTransfers (address _willOwner) public {
        Trust memory trust = TrustData[_willOwner];
        //Beneficiary memory beneficiaryData[_willOwner][_indexes[i]] = _beneficiaries[i];

    }

    function singleTransfer (address _willOwner, uint256 _beneficiaryIndex) public {
        Beneficiary memory beneficiary =  beneficiaryData[_willOwner][_beneficiaryIndex];
    }

    // This fuction should increase timer for the will
    function paySubscription () payable external {
        require(msg.value >= subscriptionPrice, "Amount should be equal to subscripton Price");
    }

    
}
