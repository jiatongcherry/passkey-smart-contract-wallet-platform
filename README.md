# Passkey Smart Contract Wallet Platform (ERC-4337)

## Tech Stack
- Platform
  - Framework: Next.JS
  - Language: TypeScript
  - Tools: Etherscan & Infura.io & Alchemy

- Smart Contract
  - Language: Solidity
  - Tools: Foundry & Infura.io & Etherscan

## Pre-requests
  1. check node and npm
     ```bash
     node -v   npm -v
  node.js install: https://nodejs.org/en/download/
  
  2. create a project
     ```bash
     npx create-next-app@latest ./
  3. If you need nodejs-typescript backend
     https://medium.com/@vihangamallawaarachchi.dev/setting-up-a-node-js-and-express-backend-with-typescript-a-comprehensive-guide-b15fad5c803c

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



