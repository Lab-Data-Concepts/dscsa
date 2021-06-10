// migrations/2_deploy.js
const DSCSAOwner     = artifacts.require("DSCSAOwner");
const DSCSAOwnerMock = artifacts.require("DSCSAOwnerMock");
const ERC1155PresetMinterPauser = artifacts.require("ERC1155PresetMinterPauser");

module.exports = async function (deployer) {
  await deployer.deploy(DSCSAOwner);
  await deployer.deploy(DSCSAOwnerMock);
  await deployer.deploy(ERC1155PresetMinterPauser, 'file://C:\dscsa\metadata');
};