// import { HardhatUserConfig, task } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//     console.log((await account.getBalance()).toString());
//   }
// });


// const config: HardhatUserConfig = {
//   paths: { tests: "tests" },
//   networks: {hardhat: {hardfork: "merge"}},
//   solidity: {
//       version: "0.8.18",
//       settings: {
//         optimizer: {
//           enabled: false,
//           runs: 0,
//         },
//       },
//     }
// };

// export default config;

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-gas-reporter';
import 'solidity-coverage';

const config: HardhatUserConfig = {
  // solidity: "0.8.0",
  solidity: {
    version: '0.8.9',
    settings: {
      evmVersion: process.env.EVM_VERSION || 'london',
      optimizer: {
        enabled: true,
        runs: 1000,
        details: {
          peephole: true,
          inliner: true,
          jumpdestRemover: true,
          orderLiterals: true,
          deduplicate: true,
          cse: true,
          constantOptimizer: true,
          yul: true,
          yulDetails: {
            stackAllocation: true,
          },
        },
      },
    },
   
  },
  typechain: {
    target: "ethers-v5"
  }
};

export default config;

