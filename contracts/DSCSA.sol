// contracts/DSCSAOwnerMock.sol - SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

// Import Ownable->Context from the OpenZeppelin Contracts library
import "node_modules/@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

/// @title  FDA DSCSA Blockchain Example
/// @author Tracy Sanders
/// @notice The distinctive feature of ERC1155 is that it uses a single smart contract to represent multiple tokens at once.
/// @dev    A simple example of a Blockchain inheriting Ownable, MAH in this problem domin
contract DSCSA is ERC1155PresetMinterPauser {
    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /*
        Preset (DEFAULT_ADMIN_ROLE, MINTER_ROLE, PAUSER_ROLE) = _msgSender
    */
    constructor() ERC1155PresetMinterPauser("http://www.labdataconcepts.com/") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(URI_SETTER_ROLE, msg.sender);
        _setupRole(PAUSER_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
    }

    function setURI(string memory newuri) public {
        require(hasRole(URI_SETTER_ROLE, msg.sender));
        _setURI(newuri);
    }

    function pause() public {
        require(hasRole(PAUSER_ROLE, msg.sender));
        _pause();
    }

    function unpause() public {
        require(hasRole(PAUSER_ROLE, msg.sender));
        _unpause();
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
    {
        require(hasRole(MINTER_ROLE, msg.sender));
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
    {
        require(hasRole(MINTER_ROLE, msg.sender));
        _mintBatch(to, ids, amounts, data);
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}