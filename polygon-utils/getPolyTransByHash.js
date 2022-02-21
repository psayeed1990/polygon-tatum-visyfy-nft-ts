// curl --request GET \
//   --url https://api-eu1.tatum.io/v3/polygon/transaction/{hash} \
//   --header 'x-api-key: REPLACE_KEY_VALUE'
const fetch = require("node-fetch");
const getPolygonTransactionByHash = async (hash) => {
    const response = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/transaction/${hash}`,
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
