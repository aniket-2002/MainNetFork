require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const CHAIN_IDS = {
  hardhat: 31337, // chain ID for hardhat testing
};
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: CHAIN_IDS.hardhat,
      forking: {
        // Using Alchemy
        url: `https://mainnet.infura.io/v3/fc716b80b9a7417e82c72fd9efef123c`, // url to RPC node, ${ALCHEMY_KEY} - must be your API key
      },
    },
  },
};
