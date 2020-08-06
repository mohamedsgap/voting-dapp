const HDWallentProvider = require("truffle-hdwallet-provider");
require("dotenv").config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  //contracts_build_directory: path.join(__dirname, "client/contracts-deployment"),
  networks: {
    develop: {
      port: 7545
    },
    rinkeby: {
      provider: () =>
        new HDWallentProvider(
          process.env.MNEMONIC,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
      network_id: 4
    }
  }
};
