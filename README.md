# ![LDC Logo](https://labdataconcepts.com/wp-content/uploads/2021/05/LDC-favicon-32x-32.ico) FDA Drug Supply Chain Security Act (DSCSA) Blockchain Overview

Implementation of the FDA DSCSA supply chain regulation in a Consortium Blockchain implemented on Ethereum.

## Overview

The DSCSA is a [FDA regulation](https://www.fda.gov/drugs/drug-supply-chain-security-act-dscsa/drug-supply-chain-security-act-law-and-policies) to track drug packages through the supply chain.  The FDA completed a DSCSA blockchain pilot in 2020: [FDA Blockchain Pilot Report](https://www.ibm.com/downloads/cas/9V2LRYG5).

The pharmaceutical supply chain of Trading Partners:
    Supplier->Manufacturer->Re-packagers->Distributor->Wholesaler->Dispensers

Estimated #s:
    - Manufacturers = 1,400
    - Distributors  = 70
    - Dispensers    = 166,000

The DSCSA currently has an implementation due date of November 27, 2023.  That date might change due to COVID-19 impacts.



## High level design

- Track the smallest sealable unit (package) identified by the Serial Number (S/N)
- Include composite key information (GTIN+LOT)
- Include state information (Expiration Date)
- Obfuscate additional data like Trade name into the referenced Metadata which can encrypted if desired
- Create DSCSA blockchain

Approach is based on grouping the smallest packages into groups instead of removing packages from groups(e.g. lots)

An alternative design by [Middle East Medicine](https://www.middleeastmedicalportal.com/a-blockchain-based-approach-for-drug-traceability-in-healthcare-supply-chain/) is to bundle packages by lot number and handle distribution of the packets on an existing blockchain like Ethereum.

## Installation

Reference [OpenZeppelin](https://docs.openzeppelin.com/learn/) for details in setting up your environment. This repository was built on Windows and Visual Code.  A brief summary is provided in the [installation.md](https://github.com/Sun2Money/DSCSA/blob/main/installation.md).

## Development

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
