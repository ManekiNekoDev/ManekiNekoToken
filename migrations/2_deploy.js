const ManekiNekoToken = artifacts.require("ManekiNekoToken");

module.exports = function(deployer) {
  deployer.deploy(ManekiNekoToken);
};