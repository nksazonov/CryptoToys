// eslint-disable-next-line no-undef
const CryptoBoys = artifacts.require("CryptoBoys");

module.exports = async function(deployer) {
  await deployer.deploy(CryptoBoys);
};
