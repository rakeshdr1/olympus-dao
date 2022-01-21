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

Includes mainly Bond, Treasury and Allocator Contracts.

Bond provides discounted Ohm in exchange of token reserves(e.g: DAI token) from User.

```shell
* Bond Contract: consists of mainly create and deposit functions
1.  create() function for creating markets for tokens of a specified interval and yield price.

function create(
        IERC20 _quoteToken, // token used to deposit
        uint256[3] memory _market, // [capacity, initial price]
        bool[2] memory _booleans, // [capacity in quote, fixed term]
        uint256[2] memory _terms, // [vesting, conclusion]
        uint32[2] memory _intervals // [deposit interval, tune interval]
    ) external returns (uint256 id_);

2. deposit() function of accepting tokens deposit from a user

    function deposit(
        uint256 _bid,
        uint256 _amount,
        uint256 _maxPrice,
        address _user,
        address _referral
    )
        external
        returns (
            uint256 payout_,
            uint256 expiry_,
            uint256 index_
        );
```

```shell
* Treasury Contract:
```

```shell
* Allocator Contract:
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
