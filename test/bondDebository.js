const { expect } = require("chai");
const { ethers } = require("hardhat");
const { smock } = require("@defi-wonderland/smock");

describe("BondDepository", async () => {
  let deployer, user1, user2;
  let auth, staking;
  let authFactory;
  before(async () => {
    [deployer, user1, user2] = await ethers.getSigners();

    authFactory = await ethers.getContractFactory("OlympusAuthority");
  });

  beforeEach(async () => {
    auth = await authFactory.deploy(
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address
    );
    staking = await smock.fake("IStaking");
  });
});
