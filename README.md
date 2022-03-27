# I-LIRA BSC staking token and DAPP



## Preparing App

Create a `.env` file similar to `.env.example` and fill in your wallet's MNEMONIC phrase

```
truffle compile
```
This command adds a contracts directory inside client/src . Basically truffle compile compiles our Solidity contracts to JSON files, which will be used by the frontend code to interact with the contracts.

## Deploy to Testnet
```
truffle migrate --network testnet
```

Get free BNB for Testnet [here](https://testnet.binance.org/faucet-smart)

## Run App Locally
```
cd client
npm start
```

## Deploy to Smart Chain Mainnet
```
truffle migrate --network bsc
```

## Deploy React Client To Dev Server
```
cd client
npm run build
cd build
mv index.html 200.html
surge --domain ethereal-trail.surge.sh
```

## Deploy React Client To Production
push and commit changes to main, and a github action will automatically deploy the client app to firebase under i-lira.com