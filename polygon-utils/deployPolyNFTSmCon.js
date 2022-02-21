// curl --location --request POST 'https://api-eu1.tatum.io/v3/nft/deploy' \
// --header 'x-api-key: YOUR_API_KEY' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//   "chain": "CELO",
//   "name": "My ERC721",
//   "publicMint": true,
//   "symbol": "ERC_SYMBOL",
//   "fromPrivateKey": "0x4874827a55d87f2309c55b835af509e3427aa4d52321eeb49a2b93b5c0f8edfb",
//   "provenance": true,
//   "feeCurrency": "CUSD"
// }'

const fetch = require("node-fetch");
const deployPolyNFTSmCon = async () => {
    const response = await fetch("https://api-eu1.tatum.io/v3/nft/deploy", {
        method: "POST",
        headers: {
            "x-api-key": process.env.TATUM_API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chain: "MATIC",
            name: "My ERC721",
            publicMint: true,
            symbol: "ERC_SYMBOL",
            fromPrivateKey: process.env.PRIVATE_KEY,
            provenance: true,
            feeCurrency: "MATIC",
        }),
    });
    const data = await response.json();
    console.log(data);
    return data;
};

//gives a transsavtion id
deployPolyNFTSmCon();
