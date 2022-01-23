# Olympus DAO Contracts

## Deployed Contracts to Rinkeby testnet :-

```shell
Authority - https://rinkeby.etherscan.io/address/0xd2Fc5EeBD6a763Ac45Cb9583B74ef38A148F5bdc
Bond Depository - https://rinkeby.etherscan.io/address/0x681B1165A5cF8D56279D27Ae6507c849c8ffD834
Staking  - https://rinkeby.etherscan.io/address/0x591d0F89feD8fdFcDcfEB54593D1F6eEa6327D81
Treasury - https://rinkeby.etherscan.io/address/0x009B05da752BFd9423227228a9066858A06D12f7
LUSD Allocator - https://rinkeby.etherscan.io/address/0x51357831F75C36282417d3d0Ef2C174ca8B33ad0

```

# Contract Workflow

![This is an image](/assets/img/dao.png)

Includes mainly Bond, Treasury and Allocator Contracts.

Provides discounted Ohm in exchange of token reserves(e.g: DAI token) from User.

```shell
* Bond Contract: consists of mainly create and deposit functions.
1.  create() function, for creating markets for tokens of a specified interval and yield price.

    function create();

2. deposit() function, accepts tokens deposit from a user.
    * user data is stored as notes (storing tokens value, time created and when payment is redeemable)

    function deposit();
```

```shell
* Treasury Contract: Treasury manages reserves, minting new ohm (using excess reserves) and burning ohm.

1. deposit() function, allows approved address to deposit asset(tokens) for ohm

    function deposit();

2. withdraw() function, allows approved address to burn ohm for reserves

    function withdraw();

3. manage() function, allows approved address to withdraw assets

    function withdraw();
```

```shell
* Allocator Contract: Allocating assets to pools to earn yields

1. deposit() function, withdraws assets from treasury and deposit asset to stability pool.

2. withdraw() function, Withdraws from stability pool and deposits assets into treasury.
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
