# synthetic-token-factory

## Overview

This repository contains the source code for the Synthetic Token Factory. The Synthetic Token Factory is a smart contract that allows users to create synthetic tokens that track the price of any asset on Ethereum. The Synthetic Token Factory is deployed on the Ethereum mainnet at [0x0Fb981D5c6aA0E7fA2eCdd8eDcCF8E76B3e12eCc](https://etherscan.io/address/0x0Fb981D5c6aA0E7fA2eCdd8eDcCF8E76B3e12eCc).


synthetic-token-factory/
├── contracts/
│   └── SyntheticToken.sol
├── test/
│   └── SyntheticToken.test.js
├── server.js
├── package.json
├── .gitignore
└── README.md

# Synthetic Token Factory

This repository contains the source code for the Synthetic Token Factory. The Synthetic Token Factory is a smart contract that allows users to create synthetic tokens that track the price of any asset on Ethereum.

## Components

1. **Smart Contract:** The `SyntheticToken.sol` file is the smart contract for the synthetic token. It includes functions for minting and burning tokens, and it uses the Chainlink oracle to get the latest price of Ether.

2. **Oracle:** The `SyntheticToken.sol` file also includes the code for the Chainlink oracle. The `getLatestPrice` function retrieves the latest price of Ether from the oracle.

3. **Testing:** The `SyntheticToken.test.js` file is a test file for the synthetic token contract. It includes a simple test that checks the minting function of the contract.

4. **Deployment:** The deployment script for the contract is located in the `migrations` directory.

5. **Frontend:** The frontend for the project is a simple HTML file that uses Web3.js to interact with the contract.

6. **Node.js Project Initialization:** The `package.json` and `package-lock.json` files are created when the Node.js project is initialized with `npm init`.

## Installation

To install the project, clone the repository and run `npm install`.

## Usage

To compile and deploy the contract, use Truffle commands `truffle compile` and `truffle migrate`. To interact with the contract, open the HTML file in a web browser.

## License

This project is released into the public domain. For more information, please refer to <https://unlicense.org>