# ![LDC Logo](99_images/LDC_32_32.ico) Development and Coding

## Style Guides

- [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- [JavaScript Standard Style](https://standardjs.com/)

## Common Development Commands

1. Launch Ganache to initialize local blockchain
2. npx truffle init (only once)
3. npx truffle compile ./contracts/DSCSA.sol
4. npx truffle migrate --network development
5. npx truffle test ./test/DSCSAMock.test.js

## Address Notes (Private Key -> Public Key -> Ethereum Address)

- Account: externally-owned account (EOA)
- Contract:
- Block:
- Transaction (tx):
- Event:

## Miscellaneous Notes

- [Link truffle cli to truffle GUI](https://eattheblocks.com/how-to-use-ganache-gui-with-truffle-episode-14/)

### NPM

- npm cache clean --force
- npx truffle develop (links truffle to GUI Ganache Accounts)

### Windows

In your VS code powershell terminal: Set-ExecutionPolicy Unrestricted
