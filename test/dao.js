const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("BondDepository", async () => {
  let deployer, user1, user2;
  let authority, treasury, staking, bond;
  let authFactory;
  let ohm, sOhm;

  const firstEpochNumber = "";
  const firstBlockNumber = "";
  const gOhm = "";

  beforeEach(async () => {
    [deployer, user1, user2] = await ethers.getSigners();

    authFactory = await ethers.getContractFactory("OlympusAuthority");

    authority = await authFactory.deploy(
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address
    );

    const OHM = await ethers.getContractFactory("OlympusERC20Token");
    ohm = await OHM.deploy(authority.address);

    const OlympusTreasury = await ethers.getContractFactory("OlympusTreasury");
    treasury = await OlympusTreasury.deploy(
      ohm.address,
      "0",
      authority.address
    );

    const SOHM = await ethers.getContractFactory("sOlympus");
    sOhm = await SOHM.deploy();

    const OlympusStaking = await ethers.getContractFactory("OlympusStaking");
    staking = await OlympusStaking.deploy(
      ohm.address,
      sOhm.address,
      gOhm,
      "2200",
      firstEpochNumber,
      firstBlockNumber,
      authority.address
    );
    await sOhm.setIndex("");
    await sOhm.initialize(staking.address, treasury.address);

    const BondDepository = await ethers.getContractFactory(
      "OlympusBondDepositoryV2"
    );
    bond = await BondDepository.deploy(
      authority.address,
      ohm.address,
      "",
      staking.address,
      treasury.address
    );
  });

  it("Should deploy contracts", () => {
    assert(authority.address);
    assert(ohm.address);
    assert(treasury.address);
    assert(staking.address);
  });
});
