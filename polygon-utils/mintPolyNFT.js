
// curl --request POST \
// --url https://api-eu1.tatum.io/v3/nft/mint \
// --header 'content-type: application/json' \
// --header 'x-api-key: REPLACE_KEY_VALUE' \
// --data '
// {
// "chain": "MATIC",
// "tokenId": "100000",
// "to": "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
// "contractAddress": "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
// "url": "https://my_token_data.com",
// "fromPrivateKey": "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2"
// }

const fetch = require('node-fetch');

//should take the IPFS url, tokenID to mint, receipient add, contract addre, private key from receipient
const mintPolyNFT = async =()=>{
    const response = await fetch('https://api-eu1.tatum.io/v3/nft/mint', {
        method: "POST",
        headers: {
            "x-api-key": "9d937646-47ff-452f-a2e5-ec682061cf4b",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chain: "MATIC",
            tokenId: "1", //token no of the asset
            to: "0x8cb76aed9c5e336ef961265c6079c14e9cd3d2ea", //change to receipient address
            contractAddress: "0x1860Cf5A199892BC527A0698e7be08a7C6Bc6064", //the NFT smart contract
            url: "http://my_token_data.com", //metadata url with ipfs
            provenance: true,
            fromPrivateKey: "0x4874827a55d87f2309c55b835af509e3427aa4d52321eeb49a2b93b5c0f8edfb", //gas fees paid from here, usually the one who is minting - user
            nonce: 0,
        }),
    } )

    const data = await response.json();

    console.log(data)

    return {data}
}

mintPolyNFT()



//* The API request body to mint a new NFT should contain the following values. The authorAddresses, cashbackValues, and fixedValues fields are only required if you are minting provenance NFTs that pay royalties in percentages. For more on working with provenance NFTs please refer to this guide.
//* chain - The blockchain on which you are minting the NFT.
//* tokenId - The ID of the token to be minted. This can be any unique number and depends on your numbering convention. Some developers use chronological numbering, some do it by date and time, it's up to you to decide how to organize your token IDs.
//* to - The recipient's address.
//* erc20 - The address of the custom ERC-20 token smart contract the creators would like to receive cashback in. If this field is absent, cashback will be paid out in the native currency of the blockchain (in this case, CELO).
//* contractAddress - The address of the NFT smart contract from which the NFT will be minted.
//* url - The URL of your JSON scheme on IPFS that points the metadata to be included in the minted NFT.
//* provenance - If set to "true" the NFT minted will be record provenance data and be able to pay out percentage royalties.
//* authorAddresses - The address or addresses of the creators to whom cashback will be sent.
//* cashbackValues - The percentage value or values of the cashback that will be sent to the NFT's creators. In the example above, the value "0.5" means that 0.005% of the sale price will be transferred to the author each time the NFT is transferred.
//* fixedValues - This value is the minimum cashback value that will be paid and is a fixed amount of the blockchain's native currency. If the cashback to be paid from the percentage of the sale is less than the fixed value, the fixed value will be paid to the authors instead.
//* fromPrivateKey - The private key from which the gas fees for the mint operation will be paid.
//* signatureId - The ID of the signed transaction from KMS. This is used in place of a private key to sign transactions securely and locally. For more info on KMS, please refer to this guide.
//* feeCurrency - The currency in which the gas fees for the operation will be paid (only for Celo).