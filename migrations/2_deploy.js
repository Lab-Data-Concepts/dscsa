// migrations/2_deploy.js
const DSCSAOwner     = artifacts.require("DSCSAOwner");
const DSCSAOwnerMock = artifacts.require("DSCSAOwnerMock");

module.exports = async function (deployer) {
  await deployer.deploy(DSCSAOwner);
  await deployer.deploy(DSCSAOwnerMock);
};