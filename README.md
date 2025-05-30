# Passkey Smart Contract Wallet Platform (ERC-4337)

## Tech Stack
- Platform
  - Framework: Next.JS
  - Language: TypeScript
  - Tools: Etherscan & Infura.io & Alchemy

- Smart Contract
  - Language: Solidity
  - Tools: Foundry & Infura.io & Etherscan


## Installation & Usage

#### Platform

```bash
cd platform
npm install

## Please fill in all the env variables (!!!)
cp .env.local.example .env.local

## For running on localhost
npm run dev

## For building on local
npm run build
```

#### Smart Contract Deployment

```bash
cd contract/script/bash

## Please fill in all the env variables (!!!)
cp .env.example .env

sudo chmod 777 deploy_factory.sh
./deploy_factory.sh
```



