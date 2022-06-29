# summon-raid-app

## QUICKSTART

1. `yarn` to install all packages and dependencies
2. Create `.env` file in `./evm` based of `./evm/.env.example`
3. `yarn local` in `./evm` to deploy a local instance
4. Create `.env` file in `./app` based of `./app/env.local.example`
5. Use addresses from `./evm/deployments/localhost` in `./app/.env`
6. From root dir `./` run `yarn start`

Yarn start triggers, in order:

- the smart contract test suite
- typechain to provide the front end with typings for Quiver
- `hardhat node` from `./evm/` instance for local evm chain
- `yarn dev` from `./app` for local frontend on `localhost:3000`

Connect you wallet to RPC `http://localhost:8545/`

Changes to front-end will be live, changed to smart-contract code require restart

## DEPLOYMENT - SMART CONTRACT

The used addresses for `deployer`, `owner` and `user` are configured in `./evm/hardhat.config.ts`. For local testing different addresses are used to validate the ownership or role-based modifiers.

## CODEBASE

**APP**

- NextJS
- [Raid Guild Design System](https://github.com/raid-guild/design-system)

**EVM**

- [Solidity-template](https://github.com/PaulRBerg/solidity-template)
- [Hardhat-deploy](https://github.com/wighawag/hardhat-deploy/tree/master)

## TODO

-[ ] Error handling and toasts -[ ] Add Graph module -[ ] Staking pools contract and tests
