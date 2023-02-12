require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    Mumbai: {
      url: `${process.env.Alchemy_Mumbai_URL}`,
      accounts: [`${process.env.Polygon_PRIVATE_KEY}`],
    } 
  }
};
