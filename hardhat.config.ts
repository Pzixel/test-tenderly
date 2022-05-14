import '@nomiclabs/hardhat-ethers';
import dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import { NetworksUserConfig } from 'hardhat/types';

dotenv.config();

if (process.env.MAINNET_RPC_URL == null) {
    throw new Error('Please specify MAINNET_RPC_URL in .env file');
}

const networks: NetworksUserConfig = {
    hardhat: {
        forking: {
            url: process.env.MAINNET_RPC_URL,
            blockNumber: 14772850
        },
        chainId: 1,
    },
};

function register (name: string, url?: string, privateKey?: string) {
    if (url && privateKey) {
        ;
        console.log(`Network '${name}' registered`);
    } else {
        console.log(`Network '${name}' not registered`);
    }
}

register('mainnet', process.env.MAINNET_RPC_URL, process.env.MAINNET_PRIVATE_KEY);

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.13',
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000000,
            },
        },
    },
    networks: networks,
    mocha: {
        timeout: 7000000,
    },
};

export default config;
