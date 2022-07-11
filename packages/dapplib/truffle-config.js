require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food shoulder recipe pitch hole coral light army giggle'; 
let testAccounts = [
"0x860ccfd028f07c1da9ac81e08f50ae27fd1bd17b43b2895c5ce47dae13dadf7f",
"0xe139585d50762c6358c791d99462c8ac5ba553967d8e085ade8006fc11ef7c53",
"0xf003e1d90eb71a986b3ffa0cc1319e76241c71547536bedd276915329ab3c004",
"0x460479bebce6848f29c100203340dbf9163232387d842640250525966c79b1cd",
"0x3afb165d721132560aadbe81a17de016ee64da179afba451b1eebb9906d6217f",
"0x4ba665de00eb208d5cba43aa7cec23ac587d9af7c409898df373ab3b774db499",
"0xc7237c8fb6a73ba7f62eef4e8666198c18e39a1e49fd2121e207edd6843b4373",
"0xd4cf8ec87dd22c4b3b5f51334196cb1c500f4ce17ca7ded51d4f6f1a91aefa03",
"0xbc87f0516caf533726dea6bc87907c92622b7a04efc21d10a104e695e12aef29",
"0xbc65f4c9e48cae14300b685c67358824c413aa42ed4a3b32b56d15a176bef0cf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


