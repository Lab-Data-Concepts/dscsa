// migrations/2_deploy.js
const DSCSA = artifacts.require("DSCSAOwner");

module.exports = async function (deployer) {
  await deployer.deploy(DSCSA);
};