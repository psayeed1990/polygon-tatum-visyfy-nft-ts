/*=============================================
=     //!Invoke any method on an existing Smart Contract. 
    It is possible to call read or write method on the Smart Contract 
   defined via contractAddress. For read operations, data is returned,
   for write operations, transaction Id of the associated
  transaction is returned.This operation needs the 
  private key of the blockchain address. Every time the funds are 
  transferred, the transaction must be signed with the corresponding 
  private key. No one should ever send it's own private keys to the 
  internet because there is a strong possibility of stealing keys and 
  loss of funds. In this method, it is possible to enter privateKey or
   signatureId. PrivateKey should be used only for quick development on
    testnet versions of blockchain when there is no risk of losing funds.
     In production, Tatum KMS should be used for the highest security 
     standards, and signatureId should be present in the request. 
     Alternatively, using the Tatum client library for supported languages.            =
=============================================*/

// curl --request POST \
//   --url https://api-eu1.tatum.io/v3/polygon/smartcontract \
//   --header 'content-type: application/json' \
//   --header 'x-api-key: REPLACE_KEY_VALUE' \
//   --data '{"contractAddress":"0x687422eEA2cB73B5d3e242bA5456b782919AFc85","methodName":"transfer","methodABI":{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},"params":["0x632"]}'

const fetch = require("node-fetch");
const invokeExisPolySmCon = async (address, methodName, methodABI, params) => {
    const response = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/smartcontract`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.TATUM_API_KEY,
            },
            body: JSON.stringify({
                contractAddress: address,
                methodName: methodName,
                methodABI: methodABI,
                params: params,
            }),
        }
    );
    const data = await response.json();
    console.log(data);
    return data;
};

//payload
//* {
//*     "contractAddress": "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
//*     "methodName": "transfer",
//*     "methodABI": {
//*       "inputs": [
//*         {
//*           "internalType": "uint256",
//*           "name": "amount",
//*           "type": "uint256"
//*         }
//*       ],
//*       "name": "stake",
//*       "outputs": [],
//*       "stateMutability": "nonpayable",
//*       "type": "function"
//*     },
//*     "params": [
//*       "0x632"
//*     ]
//*   }
