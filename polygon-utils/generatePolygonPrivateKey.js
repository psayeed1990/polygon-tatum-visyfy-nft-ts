// curl --request POST \
//   --url https://api-eu1.tatum.io/v3/polygon/wallet/priv \
//   --header 'content-type: application/json' \
//   --header 'x-api-key: REPLACE_KEY_VALUE' \
//   --data '{"index":0,"mnemonic":"urge pulp usage sister evidence arrest palm math please chief egg abuse"}'

const fetch = require("node-fetch");
const generatePolygonPrivateKey = async () => {
    const response = await fetch(
        "https://api-eu1.tatum.io/v3/polygon/wallet/priv",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "9d937646-47ff-452f-a2e5-ec682061cf4b",
            },
            body: JSON.stringify({
                index: 1,
                mnemonic:
                    "card fade wait rapid security olympic science public toilet misery dad profit",
            }),
        }
    );

    const data = await response.json();
    console.log(data);
    return data;
};

generatePolygonPrivateKey();
