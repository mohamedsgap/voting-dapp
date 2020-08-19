# Decentralized Voting App

Built a decentralized voting app based on Ethereum Blockchain. Using `Truffle React` box, to get up and running so quickly
with development process, by using Truffle, we started implementing the `Smart Conract` that handle the voting transactions,
then we started designing the amazing UI we have and imporove it to be suitable as blochain app. We finally connent Smart Contract
witt the frontend by using `web3.js`.

## How it works

we deployed our `Smart Contract` on `Rinkeby Test Network`, by register on `Infura`, to get our _access token_, to enable everyone to vote on your app when we go for production,
then everyone should have `MetaMask`, it's a plugin enables everyone to make a trasaction on blockchain network.

### How to run our app

#### For blockchain side (smart contract):

**if you want to run on a local blockchain network like `Ganache`**

```js
yarn global add truffle || npm  i -g truffle

truffle develop

compile

migrate
```

**if you want to run on a publick blockchain network (for deployment) like `Rinkeby Network`**

**_You should create .env file to store your `Infura Token` and `Mnemonic` Secret word of `MetaMask`_**

```js

yarn global add truffle || npm  i -g truffle

truffle migrate --network rinkeby

```

#### For client side (frontend):

```js
cd client

yarn || npm install

yarn start || npm run start

```

🎉🎉🎉 Made with ♥️ by Mohamed Abdel Nasser && Mohamed Khaled. 🎉🎉🎉
