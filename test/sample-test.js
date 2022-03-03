const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Cold Chain", function () {
  let ERC20;
  let contract;
  let DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  let WHALE_DAI = "0x28C6c06298d514Db089934071355E5743bf21d60";

  beforeEach(async function () {
    ERC20 = await ethers.getContractFactory("ERC20");
    contract = await ERC20.deploy();
  });

  it("TEST", async function () {
    const balance = await contract.balanceOff(DAI, WHALE_DAI);
    console.log(balance);
  });
});
