# ![LDC Logo](99_images/LDC_32_32.ico) Installation Instructions

These OpenZeppelin [instructions](https://docs.openzeppelin.com/learn/) were a great help in getting started.

A brief overview of the install process that was used in building this repository:

1. Install [Node.js](https://nodejs.org/en/download/) if needed
    - node --version
2. Create a project and package (package.json) and initialize
    - npm init -y
3. Install Truffle locally within your project to avoid upgrade problems (Hardhat is an alternative)
    - npm install --save-dev truffle
        - Add node_modules to .gitignore when prompted
    - npx truffle init
        - Only once!
4. Add source control (GitHub) with key information included in .gitignore (i.e. build)
5. Install @openzeppelin/contracts
    - npm install --save-dev @openzeppelin/contracts
6. Create contract .sol file inheriting from Owner with the Box example
7. Compile the example before making any changes just to make sure your environment is setup correctly
    - npx truffle compile ./contracts/DSCSAOwner.sol > test.log
8. Add build directory to .gitignore so private keys are not uploaded to GitHub
9. Make changes to example file for DSCSA Blockchain and compile
10. Setup local blockchain with ganache
    - install GUI Ganache if needed
    - Add Ganache network to truffle configuration file (truffle-config.js)
    - Create migrations' file (2_deploy.js)
    - npx truffle migrate --network development
11. Build [Unit Tests](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/test): install environment, helpers, and Chai for javascript assertions
    - npm install --save-dev @openzeppelin/test-environment
    - npm install --save-dev @openzeppelin/test-helpers
    - npm install --save-dev chai
    - create one solidity or javascript test file per contract
    - npx truffle test > test.log
