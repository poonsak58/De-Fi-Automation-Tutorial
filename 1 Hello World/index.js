const {ethers} = require('ethers');

async function app(){

    // BSC RPC list: https://docs.binance.org/smart-chain/developer/rpc.html
    const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');

    const blockNumber = await provider.getBlockNumber();
    console.log('Hello World!');
    console.log('Lastest block number is:', blockNumber);

    const wallet = ethers.Wallet.createRandom(); // create wallet
    console.log('Address: ', wallet.address);
    console.log('Private Key: ', wallet.privateKey);
    console.log('Mnemonic: ', wallet.mnemonic);

}

app();