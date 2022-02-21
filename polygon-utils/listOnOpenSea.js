const Web3 = require("web3");
const { OpenSeaPort, Network } = require("opensea-js");

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider(
    "047c398f473331a1b7780162e0a507c7501fa29e9e5ad679aa56dc981864216d"
);

const seaport = new OpenSeaPort(provider, {
    networkName: Network.Mumbai, // defaults to mainnet
    // apiKey: YOUR_API_KEY,
});

const API_URL = "https://api.opensea.io/api/v2/";

//list on opensea based on API url
const listOnOpenSeaAPI = async (tokenId) => {
    const asset = await seaport.getAsset(API_URL + tokenId);
    console.log(asset);
};

const listOnOpenSea = async (tokenId) => {
    const listing = await seaport.createSellOrder({
        asset: {
            tokenId: tokenId,
            tokenAddress: "0x0be302B4A21a066718bae13779b7B183f071ff92",
        },
        accountAddress: "0xc887ff05707716a4bbfd0c6fa8fe6c94def91994",
        startAmount: 3,
        // If `endAmount` is specified, the order will decline in value to that amount until `expirationTime`. Otherwise, it's a fixed-price order:
        endAmount: 0.1,
        expirationTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });
};

listOnOpenSea(1);
