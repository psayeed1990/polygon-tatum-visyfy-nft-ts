import joi from "joi";

//!Data to accept
//*1 -the IPFS url,
//*2 -tokenID to mint,
//*3 -wallet address,
//*4 -NFT contract address,
//*5 -private key from wallet

const MintSchema = joi.object().keys({
    IPFSurl: joi.string().required(), //1bnxs n
    tokenId: joi.string().required(), //2
    wallet: joi.string().required(), //3
    contractAddress: joi.string().required(), //4
    privateKey: joi.string().required(), //5
});

export default MintSchema;
