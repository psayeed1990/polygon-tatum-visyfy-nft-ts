const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const nftMintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
    },
    // userId:{
	// 	type: Schema.Types.ObjectId,
	// 	optional: true,
	// 	ref: 'UserInfo'
	// },
    isDelete:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("NftMint", nftMintSchema);