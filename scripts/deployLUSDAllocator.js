const fs = require("fs");

async function main() {
  const Authority = "0x1c21F8EA7e39E2BA00BC12d2968D63F4acb38b7A";
  const Treasury = "0x009B05da752BFd9423227228a9066858A06D12f7"; // treasury address
  const LUSD = "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"; // LUSD token
  const LQTY = "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D"; // LQTY token
  const StabilityPool = "0x66017D22b0f8556afDd19FC67041899Eb65a21bb"; // Liquity stability pool
  const LQTYStakingPool = "0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d"; // LQTY Staking pool
  const ZeroAddress = "0x0000000000000000000000000000000000000000";
  const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // weth
  const DAI = "0x6b175474e89094c44da98b954eedeac495271d0f"; //dai
  const V3Router = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"; //uniswapV3 router

  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contract with the account: ${deployer.address}`);

  const balance = await deployer.getBalance();
  console.log(`Account Balance:${balance.toString()}`);

  const LUSDAllocator = await ethers.getContractFactory("LUSDAllocator");
  const lusdAllocator = await LUSDAllocator.deploy(
    Authority,
    Treasury,
    LUSD,
    LQTY,
    StabilityPool,
    LQTYStakingPool,
    ZeroAddress,
    WETH,
    DAI,
    V3Router
  );

  console.log("LUSD Allocator Deployed Address: " + lusdAllocator.address);

  const data = {
    address: lusdAllocator.address,
    abi: JSON.parse(lusdAllocator.interface.format("json")),
  };

  fs.writeFileSync("deployments/LUSDAllocator.json", JSON.stringify(data));
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
