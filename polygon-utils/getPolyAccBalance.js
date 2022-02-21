// curl --request GET \
//   --url https://api-eu1.tatum.io/v3/polygon/account/balance/{address} \
//   --header 'x-api-key: REPLACE_KEY_VALUE'
const fetch = require("node-fetch");
const getPolygonAccountBalance = async (address) => {
    const response = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/account/balance/${address}`,
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

getPolygonAccountBalance("0xc887ff05707716a4bbfd0c6fa8fe6c94def91994");
