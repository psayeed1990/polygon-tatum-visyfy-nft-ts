var multer  = require('multer');
const Web3 = require('web3');
const getNftMint = require("../models/nftMint");
const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
var http = require('http');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const { compareSync } = require('bcrypt');
const jquery = require('jquery');
const CONTACT_ADDRESS = '0xCF82d5661C1F127EB21DB9B37D7613d29bbd06e3';
const CONTACT_ABI =
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "NOT_CURRENT_OWNER",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_approved",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_uri",
				"type": "string"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "_interfaceID",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("req.bodyreq.bodyreq.body1222222",req.body);
        cb(null, "./uploads/mintImage");
    },
    // filename: (req, file, cb) => {
    //     console.log("req.bodyreq.bodyreq.body12",req.body);
    //     cb(null, file.originalname.replace(/ /g, ""));
    // }
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+'.png')
    }
});

const upload = multer({storage: storage}).single('mintImage');

exports.nftMint =(req2,res) =>{

    const data = req2.body;
    const loginUserAddress = data.loginUserAddress;
    const urlModify = data.urlModify;
    console.log("data",data);
    // openMetamask(loginUserAddress,urlModify)

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api-eu1.tatum.io/v3/polygon/smartcontract",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "x-api-key": "bf846fcb-8fb4-4c74-a0ce-0e9642fc6741"
        },
        "processData": false,
        "dataType": "json",
        "data": "{\"contractAddress\":\"0xcf82d5661c1f127eb21db9b37d7613d29bbd06e3\",\"methodName\":\"mint\",\"methodABI\":{ \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_tokenId\", \"type\": \"uint256\" }, { \"internalType\": \"string\", \"name\": \"_uri\", \"type\": \"string\" } ], \"name\": \"mint\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" },\"params\":[\"0x3b235B5AF7841D8dF5dE1c01a56f52d560Bc35Dd\",\"25\",\"https://ipfs.io/ipfs/bafyreigzx2dbyzlfeje473ujwrg3fkdrrfalqvl2k72rmpzqbxt2yxjovy/metadata.json\"],\"fromPrivateKey\":[\"0d16e292185631cf0a4d3320e2f2a7f5969489d8cde0f933b0492d3bcd51414d\"]}"

      };
      console.log("settings",settings);
      $.ajax(settings).done(function (response) {
          console.log("asdlkglasdjmf");
        console.log("response",response);
      });

    // getNftMint.count((err,totalNfts)=>{
    //     if(err){
    //         return res.json({
    //             status:0,
    //             error:err
    //         });
    //     }
    //     else{
    //         var totalNfts = totalNfts;
    //         totalNfts = totalNfts+1;
    //         console.log("totalNfts",totalNfts);
    //     }
    // });
    
    // const data = new getNftMint(req.body);
    // data.save((err,newNftMintAdd)=>{
    //     if(err){
    //         return res.json({
    //             status:0,
    //             error:err
    //         });
    //     }
    //     else{
    //         return res.json({
    //             status:1,
    //             message:"Image Succesfully Mint On Opensea",
    //             data:newNftMintAdd
    //         })
    //     }
    // });
    
}

exports.nftMintWithImage = (req, res) =>{
    // console.log("Tesign123",req.params);
    // console.log("Tesign123",req.body);
    upload(req,res,err => {
        var originalname ='';
        console.log("req.bodyreq.bodyreq.body",req.body);
        console.log("req.bodyreq.bodyreq.file",req.file);
        console.log("req.bodyreq.bodyreq.err",req.err);
        var description = req.body.description;
        var name = req.body.name;
        // var userId = req.body.userId;
        if(err){
            return res.json({
                status:0,
                error:err
            });
        }
        else{
            var files = req.file;
            console.log("files ndm",files);
            if(files !== undefined && files !== null){
                originalname = files.filename;
                var newNftMint = new getNftMint(req.body);
                newNftMint.set('image',originalname);
                console.log("newNftMint",newNftMint);
                newNftMint.save((err,newNftMintAdd)=>{
                    if(err){
                        return res.json({
                            status:0,
                            error:err
                        });
                    }
                    else{
                        return res.json({
                            status:1,
                            message:"Image Succesfully Mint On Opensea",
                            data:newNftMintAdd
                        })
                    }
                })
            }
            else{
                return res.json({
                    status:0,
                    message:"Please Selete Any Image"
                })
            }

        }
    });
    
}
exports.totalNfts = (req, res) =>{
    console.log("totalNfts")
    getNftMint.count((err,totalNfts)=>{
        if(err){
            return res.json({
                status:0,
                error:err
            });
        }
        else{
            return res.json({
                status:1,
                totalNfts:totalNfts
            })
        }
    });
}

async function openMetamask(loginUserAddress,urlModify) {
    console.log("openMetamask",loginUserAddress,urlModify);
    // const privateKeyToAccount = web3.eth.accounts.privateKeyToAccount(loginUserAddress);
    // console.log('privateKeyToAccount',privateKeyToAccount);
    const options = {
        "method": "POST",
        "hostname": "api-eu1.tatum.io",
        "port": null,
        "path": "/v3/polygon/smartcontract",
        "headers": {
          "content-type": "application/json",
          "x-api-key": "bf846fcb-8fb4-4c74-a0ce-0e9642fc6741"
        }
      };
      console.log("1111");
    const req = http.request(options, function (res) {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        const chunks = [];
        console.log("2222");
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
        console.log("3333");
        res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });
      console.log("4444");
    
    req.write(JSON.stringify({
        contractAddress: '0xCF82d5661C1F127EB21DB9B37D7613d29bbd06e3',
        methodName: 'mint',
        methodABI: {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_uri",
                    "type": "string"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        params: ['0x3b235B5AF7841D8dF5dE1c01a56f52d560Bc35Dd',5,urlModify],
        fromPrivateKey: '0d16e292185631cf0a4d3320e2f2a7f5969489d8cde0f933b0492d3bcd51414d',
    }, console.log("ok")));
    console.log("55555");
    req.end();
}


// function  openMetamask(loginUserAddress,urlModify){
//     const postData = JSON.stringify({
//         'msg': 'Hello World!'
//       });
      
//       const options = {
//         hostname: 'www.google.com',
//         port: 80,
//         path: '/upload',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Content-Length': Buffer.byteLength(postData)
//         }
//       };
      
//       const req = http.request(options, (res) => {
//         console.log(`STATUS: ${res.statusCode}`);
//         console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//         res.setEncoding('utf8');
//         res.on('data', (chunk) => {
//           console.log(`BODY: ${chunk}`);
//         });
//         res.on('end', () => {
//           console.log('No more data in response.');
//         });
//       });
      
//       req.on('error', (e) => {
//         console.error(`problem with request: ${e.message}`);
//       });
      
//       // Write data to request body
//       req.write(postData);
//       req.end();
// }

// exports.smartContract =  async (request, res)=>{
// 	console.log("api calling")
//     const options = {
//         "method": "POST",
//         "hostname": "api-us-west1.tatum.io",
//         "port": null,
//         "path": "/v3/polygon/smartcontract",
//         "headers": {
//             "content-type": "application/json",
//             "x-api-key": "2527a5e1-0c06-48a6-abcc-74fdbc9c7ce4"
//         }
//     };

//     const req = http.request(options, function (res) {
//     const chunks = [];

//     res.on("data", function (chunk) {
//         chunks.push(chunk);
//     });

//     res.on("end", function () {
//         const body = Buffer.concat(chunks);
//         console.log(body.toString());
//     });
//     });

//     req.write(JSON.stringify({
//   "contractAddress": "0xcf82d5661c1f127eb21db9b37d7613d29bbd06e3",
//   "methodName": "mint",
//   "methodABI": {
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_tokenId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_uri",
// 				"type": "string"
// 			}
// 		],
// 		"name": "mint",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
//   "params": [
//     "0xC261434F01f2C28C8DBB8Dc80870ADFaA7A1F64E",
// 		"11",
// 		"https://ipfs.io/ipfs/bafyreigzx2dbyzlfeje473ujwrg3fkdrrfalqvl2k72rmpzqbxt2yxjovy/metadata.json"
//   ],
//   "fromPrivateKey": "44755d79b8672240fae5fae1ffa1cfebd33f10bee5425617c73c4c32728aefc2"
// }));
//     req.end();

// }
