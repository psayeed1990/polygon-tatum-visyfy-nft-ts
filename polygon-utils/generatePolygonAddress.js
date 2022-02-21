//generate polygon address from xpub
//--header 'x-api-key: 19469541-e3de-4025-8e42-75e5a21d77af'
//
const fetch = require("node-fetch");
const generatePolygonAddress = async () => {
    const response = await fetch(
        "https://api-eu1.tatum.io/v3/polygon/address/xpub6F1RcVvAwCUEz5XuvJuPREDZ66qeoC33tHeXeYNNJhF1eGHg74eLeh4Y2tDNxuLkJhgsgccciJeh3NBpTfpTVPApaWzpqMx41Z6U2NAjgqs/1",
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

generatePolygonAddress();
