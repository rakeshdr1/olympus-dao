const fs = require("fs");

async function main() {
  const firstEpochNumber = "550";
  const firstBlockNumber = "9505000";
  const gOhm = "0x0ab87046fBb341D058F17CBC4c1133F25a20a52f";

  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contract with the account: ${deployer.address}`);

  const balance = await deployer.getBalance();
  console.log(`Account Balance:${balance.toString()}`);

  const AuthFactory = await ethers.getContractFactory("OlympusAuthority");
  const authority = await AuthFactory.deploy(
    deployer.address,
    deployer.address,
    deployer.address,
    deployer.address
  );

  console.log(`Authority address:${authority.address}`);

  const OHM = await ethers.getContractFactory("OlympusERC20Token");
  const ohm = await OHM.deploy(authority.address);

  const OlympusTreasury = await ethers.getContractFactory("OlympusTreasury");
  const treasury = await OlympusTreasury.deploy(
    ohm.address,
    "0",
    authority.address
  );

  console.log(`Treasury address:${treasury.address}`);

  const treasuryData = {
    address: treasury.address,
    abi: JSON.parse(treasury.interface.format("json")),
  };

  fs.writeFileSync(
    "deployments/OlympusTreasury.json",
    JSON.stringify(treasuryData)
  );

  const SOHM = await ethers.getContractFactory("sOlympus");
  const sOhm = await SOHM.deploy();

  const OlympusStaking = await ethers.getContractFactory("OlympusStaking");
  const staking = await OlympusStaking.deploy(
    ohm.address,
    sOhm.address,
    gOhm,
    "2200",
    firstEpochNumber,
    firstBlockNumber,
    authority.address
  );
  await sOhm.setIndex("7675210820");
  await sOhm.initialize(staking.address, treasury.address);

  console.log(`Staking address:${staking.address}`);

  const stakingData = {
    address: staking.address,
    abi: JSON.parse(staking.interface.format("json")),
  };

  fs.writeFileSync(
    "deployments/OlympusStaking.json",
    JSON.stringify(stakingData)
  );

  const BondDepository = await ethers.getContractFactory(
    "OlympusBondDepositoryV2"
  );

  const bond = await BondDepository.deploy(
    authority.address,
    ohm.address,
    gOhm,
    staking.address,
    treasury.address
  );

  console.log(`Bond address:${bond.address}`);

  const data = {
    address: bond.address,
    abi: JSON.parse(bond.interface.format("json")),
  };

  fs.writeFileSync(
    "deployments/OlympusBondDepositoryV2.json",
    JSON.stringify(data)
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
