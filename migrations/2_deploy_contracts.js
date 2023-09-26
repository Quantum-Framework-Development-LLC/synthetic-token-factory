// migrations/2_deploy_contracts.js

const SyntheticToken = artifacts.require("SyntheticToken");

module.exports = function(deployer) {
  deployer.deploy(SyntheticToken);
};