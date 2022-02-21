const express = require("express");
const router = express.Router();
const getNftMint = require("../models/nftMint");
const { nftMint, totalNfts, smartContract } = require("../controllers/nftMint");

// router.post(
//   // "/nftMint",
//   // nftMint
// );

router.get("/totalNfts", totalNfts);

// router.post("/smartContract",smartContract)
const http = require("https");

router.post("/nftMint", async (request, res) => {
    var totalNftsCount = 700;
    var loginUserAddress = request.body.loginUserAddress;
    var urlModify = request.body.urlModify;

    var totalNfts = await getNftMint.count();
    totalNftsCount = totalNftsCount + totalNfts;

    //whats the point of this?
    if (totalNftsCount == totalNfts) {
        return res.json({ statusCode: 403, message: "NFT not added" });
    }

    //  getNftMint.count((err,totalNfts)=>{
    //     if(err){
    //         return res.json({
    //             status:0,
    //             error:err
    //         });
    //     }
    //     else{
    //       totalNftsCount = totalNftsCount+totalNfts;
    //       console.log("totalNfts",totalNftsCount);
    //     }
    // });
    console.log("api calling");
    const options = {
        method: "POST",
        hostname: "api-us-west1.tatum.io",
        port: null,
        path: "/v3/polygon/smartcontract",
        headers: {
            "content-type": "application/json",
            "x-api-key": "6b9a5165-24f8-4f80-bc22-5dd8e37ad49c",
        },
    };

    const req = http.request(options, function (res) {
        const chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    req.write(
        JSON.stringify({
            contractAddress: "0xcf82d5661c1f127eb21db9b37d7613d29bbd06e3",
            methodName: "mint",
            methodABI: {
                inputs: [
                    {
                        internalType: "address",
                        name: "_to",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "_tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "_uri",
                        type: "string",
                    },
                ],
                name: "mint",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            params: [
                // "0xC261434F01f2C28C8DBB8Dc80870ADFaA7A1F64E",
                loginUserAddress,
                totalNftsCount,
                urlModify,
                // "https://ipfs.io/ipfs/bafyreigzx2dbyzlfeje473ujwrg3fkdrrfalqvl2k72rmpzqbxt2yxjovy/metadata.json"
            ],
            fromPrivateKey:
                "0d16e292185631cf0a4d3320e2f2a7f5969489d8cde0f933b0492d3bcd51414d",
        })
    );

    req.end();
    const data = new getNftMint(request.body);
    data.save((err, newNftMintAdd) => {
        if (err) {
            return res.json({
                status: 0,
                error: err,
            });
        } else {
            res.json({
                status: 1,
                message: "Image Succesfully Mint On Opensea",
                data: newNftMintAdd,
            });
            // console.log("saldhfjsd");
        }
    });
});

module.exports = router;
