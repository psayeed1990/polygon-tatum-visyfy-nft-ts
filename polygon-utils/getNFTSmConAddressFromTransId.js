// curl --request GET \
//   --url https://api-eu1.tatum.io/v3/blockchain/sc/address/CELO/0xa61f21f5c33996f7e8a6d209513fb446ea345565f10e614e40a7978e3373b919 \
//   --header 'x-api-key: REPLACE_KEY_VALUE'
const fetch = require("node-fetch");

const getNFTSmConAddFromTransId = async (transId) => {
    const response = await fetch(
        `https://api-eu1.tatum.io/v3/blockchain/sc/address/MATIC/${transId}`,
        {
            method: "GET",
            headers: {
                "x-api-key": process.env.TATUM_API_KEY,
            },
        }
    );

    const data = await response.json();
    console.log(data);
    return data;
};
getNFTSmConAddFromTransId(
    "0xbc7d0313a0f9060762049994472c8d989b28e022f4b426f9dcaf4c7f43d97762"
);
