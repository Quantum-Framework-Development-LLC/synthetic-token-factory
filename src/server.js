// server.js

const express = require('express');
const ethers = require('ethers');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    const contractAddress = 'your_contract_address';
    const contractABI = 'your_contract_abi';
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    contract.totalSupply().then(totalSupply => {
        res.send(`Total Supply: ${totalSupply}`);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});