// test/SyntheticToken.test.js

const SyntheticToken = artifacts.require('SyntheticToken');

contract('SyntheticToken', (accounts) => {
    it('should mint tokens', async () => {
        const tokenInstance = await SyntheticToken.deployed();
        await tokenInstance.mint(accounts[0], 100);
        const balance = await tokenInstance.balanceOf(accounts[0]);
        assert.equal(balance.toNumber(), 100, 'Minting failed');
    });
});