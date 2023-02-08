const { Wallet, ethers } = require('ethers');
const ABI = require("../src/libs/contract_abi.json");
const { toHex } = require('../src/libs/utils');

const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT = process.env.CONTRACT

const alchemyProvider = new ethers.providers.AlchemyProvider("maticmum", process.env.API_KEY);

const wallet = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const signer = wallet.connect(alchemyProvider);
const contract = new ethers.Contract(CONTRACT, ABI, signer);

exports.performUpkeep = async (address) => {
    const result = await contract.subscriptionPrice()
    console.log(toHex(result._hex))
}


exports.checkUpkeep = async (address) => {
    const result = await contract.bulkTransfers(address)
    await result.wait()
}


