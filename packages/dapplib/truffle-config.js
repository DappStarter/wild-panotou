require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot alcohol rescue saddle mistake inside light army gentle'; 
let testAccounts = [
"0xc0fb9231646b047590dac8b3e3e7e7dbd1266eedc8b9248445556069d1430194",
"0x2c73cd250a17fced81a87813931ae7ddcce6a8b1971bbbbecb45a8698a7dfb91",
"0x267b6458553a3693c1a09d295a205a3a17db640e5c07ebfb45fe34c6e33a19bd",
"0x4831f47da0fd8964b67566d5452b90382e0867ad2ee266bd3033b6e280b95a68",
"0xabdcc4bebe86607c2aaae0808b8bdc765dd8836cbd6e9682ecd1842461802065",
"0xa34ac9d7a01db4087d7efd76b24b6cd0c06e96f7d37934fd6bcd5a55d2941e35",
"0x72a557503e2f1c56ef6cccb9460c4f3e541ddedcd9868fd3f6382a2194958506",
"0x8693ce88763bb21ebe22015e661a92a59993da33c6e8e1b9cd0dfd7bac05eefd",
"0x1369c4c78751a2bd29f5ee4ad1c6af4ba05029bb84bb723709205a4628f69e1b",
"0xb5e39241ae91785a99e0072547d1580a122cf294daabf8a33e8e39a81679150a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
