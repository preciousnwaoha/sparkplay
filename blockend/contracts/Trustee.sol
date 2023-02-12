//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

//import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Trustee {

    struct Details{
        uint256 amount;
        uint256 deadline;
        uint256 duration;
        string description;
        address beneficiary;
    }

    mapping(address => Details) public userTrustDetails;
    
    event CreateTrust(address indexed _owner, address indexed _beneficiary, uint256 value, uint256 deadline, uint256 duration, string description);
    event ActivateTrust(address indexed _owner, address indexed _beneficiary, uint256 value, uint256 deadline);
    event AddAdditionalFunds(address indexed _owner, uint256 newFunds, uint256 totalValue, uint256 deadline);

    //at the expiration of the deadline, the funds will be released to the beneficiary's address.
    function createTrust(uint256 _duration, address _beneficiary, string calldata _description) payable external{
        require(msg.value > 0, "Insufficient funds to create trust");
        require(_duration > 0, "Set duration");
        require(msg.sender != _beneficiary, "User cannot be beneficiary");

        uint256 _deadline = block.timestamp + _duration;
        userTrustDetails[msg.sender] = Details(msg.value, _deadline, _duration, _description, _beneficiary);

        emit CreateTrust(msg.sender, _beneficiary, msg.value, _deadline, _duration, _description);

    }

    //activate switch with user's address
    function activateTrust(address owner) external{
        Details storage userDetails = userTrustDetails[owner];
        require(userDetails.amount > 0, "Not enough ETH");
        require(block.timestamp > userDetails.deadline, "Not past deadline yet");

        //store values
        uint256 amountToSend = userDetails.amount;
        address beneficiaryAddress = userDetails.beneficiary;

        emit ActivateTrust(msg.sender, beneficiaryAddress, amountToSend, userDetails.deadline);

        delete userTrustDetails[owner];

        //send deposited amount to beneficiary's address
        (bool success,) = payable(beneficiaryAddress).call{value : amountToSend}("");
        require(success, "Transfer Failed");
    }

    //deposit additional funds
    function addAdditionalFunds() payable external{
        Details storage userDetails = userTrustDetails[msg.sender];
        require(userDetails.amount > 0, "Not enough ETH");
        require(block.timestamp < userDetails.deadline, "Past deadline already");
        require(msg.value > 0, "Insufficient funds to create trust");

        userDetails.amount += msg.value;

        emit AddAdditionalFunds(msg.sender, msg.value, userDetails.amount, userDetails.deadline);
    }
}

/*contract TrusteeNFT is IERC721 {

    address public nftAddress;
    uint256 public tokenID;

    event Approval();

    function approve(address _nftAddress, uint256 _tokenID) public {
        nftAddress = _nftAddress;
        tokenID = _tokenID;
        address owner = ownerOf(_tokenID);
        require(_nftAddress != owner);
        require(msg.sender == owner || isApprovedForAll(owner, msg.sender));
        _tokenApprovals[_tokenID] = _nftAddress;
    }

}*/