#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo ".env file not found. Exiting."
    exit 1
fi

# Prompt user for chain selection
echo "Choose a chain to deploy:"
echo "1) Sepolia Ethereum Testnet"
echo "2) Polygon Mainnet"
read -p "Enter your choice (1 or 2): " choice

# Set variables based on the user's choice
if [ "$choice" -eq 1 ]; then
    RPC_URL="https://sepolia.infura.io/v3/$INFURA_PROJECT_ID"
    echo "You selected Sepolia Ethereum Testnet."
elif [ "$choice" -eq 2 ]; then
    RPC_URL="https://polygon-mainnet.infura.io/v3/$INFURA_PROJECT_ID"
    echo "You selected Polygon Mainnet."
else
    echo "Invalid choice. Exiting."
    exit 1
fi

# Execute the forge command
echo "Deploying to $RPC_URL..."
forge script DeploySimpleAccountFactory --private-key $PRIVATE_KEY --rpc-url $RPC_URL --etherscan-api-key $ETHERSCAN_API_KEY --verify --slow --broadcast
