# I-LIRA BSC staking token and DAPP



## Running App

Create a `.env` file similar to `.env.example` and fill in your wallet's MNEMONIC phrase

```
truffle compile
```
This command adds a contracts directory inside client/src . Basically truffle compile compiles our Solidity contracts to JSON files, which will be used by the frontend code to interact with the contracts.

```
cd client
npm start
```


## Deploy to Testnet
```
truffle migrate --network testnet
```

Get free BNB for Testnet [here](https://testnet.binance.org/faucet-smart)

## Deploy to Smart Chain Mainnet
```
truffle migrate --network bsc
```