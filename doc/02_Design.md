# High level design

- Track the smallest sealable unit (package) identified by the Serial Number (S/N)
- Include composite key information (GTIN+LOT)
- Include state information (Expiration Date)
- Obfuscate additional data like Trade name into the referenced Metadata which can encrypted if desired
- Create DSCSA blockchain

Approach is based on grouping the smallest packages into groups instead of removing packages from groups(e.g. lots)

An alternative design by [Middle East Medicine](https://www.middleeastmedicalportal.com/a-blockchain-based-approach-for-drug-traceability-in-healthcare-supply-chain/) is to bundle packages by lot number and handle distribution of the packets on an existing blockchain like Ethereum.

## Installation

Reference [OpenZeppelin](https://docs.openzeppelin.com/learn/) for details in setting up your environment. This repository was built on Windows and Visual Code.  A brief summary is provided in the [10_Installation.md](10_Installation.md).

## Common Development Commands

1. Launch Ganache to initialize local blockchain
2. npx truffle init
3. npx truffle compile ./contracts/DSCSA.sol > test.log
4. npx truffle migrate --network development
5. npx truffle test ./test/DSCSA.test.js > test.log

### Example Code

### Unit Testing

The unit tests for each function are organized as follows:

- happy cases
- trigger requires
- check modifiers
- edge cases (1 boundary)
- corner cases (n edges)

### Create Documentation

solc --userdoc --devdoc DSSCSA.sol

## Miscellaneous Notes

### NPM

- npm cache clean --force

### Logging

./test > test.log

### Windows

In your VS code powershell terminal: Set-ExecutionPolicy Unrestricted
