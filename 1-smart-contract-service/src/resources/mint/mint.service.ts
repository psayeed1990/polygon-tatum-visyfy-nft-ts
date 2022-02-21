import MintedResult from "@/resources/mint/mint.interface";
const fetch = require("node-fetch");
//// import { OpenSeaPort, Network } from "opensea-js";
////implement opensea when it supports polygon

class MintService {
    /**
     * Mints an NFT
     */
    public async mintNFT(
        IPFSurl: string,
        tokenId: string,
        wallet: string,
        contractAddress: string,
        privateKey: string
    ): Promise<MintedResult> {
        /*=============================================
        =           Better code Refactor from Old app to mint NFT            =
        =============================================*/

        //TODO
        //!1-Create a NFT smartcontract using deployPolyNFTSmCon() function - done
        //!2-Create Metadata in IPFS and add assets - done
        //!3-Mint a NFT using 1 and 2 - done
        //!4-Check The Transaction id - done
        //*5-Upload to OpenSea !- doesn't support yet

        //!Data to accept
        //*1 -the IPFS url,
        //*2 -tokenID to mint,
        //*3 -wallet address,
        //*4 -NFT contract address,
        //*5 -private key from wallet

        const response = await fetch("https://api-eu1.tatum.io/v3/nft/mint", {
            method: "POST",
            headers: {
                "x-api-key": process.env.TATUM_API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chain: "MATIC",
                //token no of the asset
                tokenId: tokenId, //"1", send a unique tokenId for each asset
                //change to wallet address
                to: wallet, //process.env.POLYGON_ADDRESS,
                //the NFT smart contract
                contractAddress: contractAddress, //process.env.POLYGON_NFT_CONTRACT,
                //metadata url with ipfs
                url: IPFSurl, //ipfs://bafkreias4wmnv3fn4yfqjzet6robgt7mskd2y5drcfgzlumzlnh3mungza/metadata.json
                provenance: true,
                //gas fees paid from here, usually the one who is minting - author
                fromPrivateKey: privateKey,
                //"047c398f473331a1b7780162e0a507c7501fa29e9e5ad679aa56dc981864216d",
            }),
        });

        const data = await response.json();

        //data will be a transaction id

        console.log(data);

        /*=====  End of refactored better code directly from Old app to mint NFT  ======*/

        return {
            data,
        };
    }
}

export default MintService;
