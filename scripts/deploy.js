async function main() {
  const firstEpochNumber = "";
  const firstBlockNumber = "";
  const gOhm = "";

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

  const OHM = await ethers.getContractFactory("OlympusERC20Token");
  const ohm = await OHM.deploy(authority.address);

  const OlympusTreasury = await ethers.getContractFactory("OlympusTreasury");
  const treasury = await OlympusTreasury.deploy(
    ohm.address,
    "0",
    authority.address
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
  await sOhm.setIndex("");
  await sOhm.initialize(staking.address, treasury.address);

  const BondDepository = await ethers.getContractFactory(
    "OlympusBondDepositoryV2"
  );

  const bond = await BondDepository.deploy(
    authority.address,
    ohm.address,
    "",
    staking.address,
    treasury.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
