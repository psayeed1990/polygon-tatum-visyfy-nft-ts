//import fetch
const fetch = require("node-fetch");

const generateWallet = async () => {
    //generate wallet from tatum.io

    const response = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/wallet?mnemonic=${process.env.MNEMONIC}/1`,
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

generateWallet();
