const { generateWallet, Currency } = require("@tatumio/tatum");

const generateNewPolygonWallet = async () => {
    const btcWallet = await generateWallet(Currency.MATIC, false);
    console.log(btcWallet);
};

generateNewPolygonWallet();
