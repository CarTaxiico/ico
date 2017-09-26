var CarTaxiIco = artifacts.require("./CarTaxiIco.sol");

var icoManager = '0x123536f16f16E3E6Ef803530256354a4dc26a515';
var preIcoToken = '0x993fAE61F2072200Cd377b5b376CbA3ab137b361';

module.exports = function(deployer) {
  deployer.deploy(CarTaxiIco, icoManager, preIcoToken);
};
