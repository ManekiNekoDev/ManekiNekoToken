const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync("../.secret").toString().trim();

module.exports = {
  networks: {
    dev: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    test: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      from: '0x33B5056E0D05786dB121d23AC04A68394775Ac7c'
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: '3Q4D6SMNSNN24K3C522NWSABC346CDJUMA'
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.16", // A version or constraint - Ex. "^0.5.0"
    }
  }
}