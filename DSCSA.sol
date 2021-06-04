// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

abstract contract DSCSA {
    uint256 public constant SILDENAFIL_CITRATE_NFT_ID = 135413523;
    string internal _uri;
}

### Scratch pad

//import "node_modules/@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";
//is ERC1155PresetMinterPauser 

// Import ERC1155PresetMinterPauser : https://docs.openzeppelin.com/contracts/3.x/api/presets#ERC1155PresetMinterPauser
// Dependencies?  @TODO@ Need to figure out how to exclude
// import "node_modules/@openzeppelin/contracts/access/AccessControl.sol";
// import "node_modules/@openzeppelin/contracts/access/AccessControlEnumerable.sol";
// import "node_modules/@openzeppelin/contracts/security/Pausable.sol";
// import "node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
// import "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
// import "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
// import "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
// import "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
// import "node_modules/@openzeppelin/contracts/utils/Address.sol";
// import "node_modules/@openzeppelin/contracts/utils/Strings.sol";
// import "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol";
// import "node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol";
// import "node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

/// @title  FDA DSCSA Blockchain Example
/// @author Tracy Sanders
/// @notice The distinctive feature of ERC1155 is that it uses a single smart contract to represent multiple tokens at once.
    /**
     * @dev Using OZ's ERC1155 Preset which grants the roles to the deployer:
     *  - DEFAULT_ADMIN_ROLE
     *  - MINTER_ROLE
     *  - PAUSER_ROLE
     *  - URI_SETTER_ROLE
     */
