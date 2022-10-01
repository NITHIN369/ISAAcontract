require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      // chainId: 5777,
      // gasPrice:1000000,
      accounts: [
        "30a77d2d1cf7ca1a8c1e7b749741f46f1c69cb5bcd459ea59bbc5821e8ec20da",
      ],
    },
  },
};
