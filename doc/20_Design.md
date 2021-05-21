# ![LDC Logo](99_images/LDC_32_32.ico) High level design

Based on the business scenarios, the design will strive to provide maximum flexibility on Ethereum and other blockchains.  This design will focus on the storage of application data first and then the mechanics of supply chain financial transactions.  

Design is based on leveraging [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/) smart contracts.

- Implement the DSCSA via the [ERC1155 Multi Token Standard](https://docs.openzeppelin.com/contracts/4.x/erc1155)
- Add [AccessControl](https://docs.openzeppelin.com/contracts/4.x/api/access#AccessControl)

A similar design was presented by [Middle East Medicine](https://www.middleeastmedicalportal.com/a-blockchain-based-approach-for-drug-traceability-in-healthcare-supply-chain/):

![High Level Design](99_images/Design/2-high-level-architecture.jpg)
![Sequence Diagram](99_images/Design/3-Sequence-Diagram.jpg)

## Initial Design

- Track the smallest sealable unit (package) identified by the Serial Number (S/N)
- Include composite key information (GTIN+LOT)
- Include state information (Expiration Date)
- Obfuscate additional data like Trade name into the referenced Metadata which can encrypted if desired
- Create DSCSA blockchain

## Common Development Commands

1. Launch Ganache to initialize local blockchain
2. npx truffle init
3. npx truffle compile ./contracts/DSCSAOwnerMock.sol
4. npx truffle migrate --network development
5. npx truffle test ./test/DSCSAOwnerMock.test.js

### Unit Testing

The unit tests for each function are organized as follows:

- happy cases
- trigger requires
- check modifiers
- edge cases (1 boundary)
- corner cases (n edges)

### NPM

- npm cache clean --force

### Windows

In your VS code powershell terminal: Set-ExecutionPolicy Unrestricted
