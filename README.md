# Olympus DAO Contracts

## Deployed Contracts to Rinkeby testnet :-

```shell
Authority - https://rinkeby.etherscan.io/address/0xd2Fc5EeBD6a763Ac45Cb9583B74ef38A148F5bdc
Bond Depository - https://rinkeby.etherscan.io/address/0x681B1165A5cF8D56279D27Ae6507c849c8ffD834
Staking  - https://rinkeby.etherscan.io/address/0x591d0F89feD8fdFcDcfEB54593D1F6eEa6327D81
Treasury - https://rinkeby.etherscan.io/address/0x009B05da752BFd9423227228a9066858A06D12f7
LUSD Allocator - https://rinkeby.etherscan.io/address/0x51357831F75C36282417d3d0Ef2C174ca8B33ad0

```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```
