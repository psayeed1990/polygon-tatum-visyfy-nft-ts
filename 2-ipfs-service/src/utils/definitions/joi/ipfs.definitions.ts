import joi from "joi";

//!Data to accept from the user
//This is the JSON metadata for the NFT
//*1 -name,
//*2 -description,
//*3 -image file,

const IPFSSchema = joi.object().keys({
    name: joi.string().required(), //1 name
    description: joi.string().required(), //2 description
    image: joi.string().required(), //3 image file url
});

export default IPFSSchema;
