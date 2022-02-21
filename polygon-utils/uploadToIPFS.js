// curl --request POST \
//   --url https://api-eu1.tatum.io/v3/ipfs \
//   --header 'content-type: multipart/form-data' \
//   --header 'x-api-key: REPLACE_KEY_VALUE' \
//   -F upload=@local_path_to_your_file_e_q_test-356.jpg

const { ipfsUpload, ipfsGet } = require("@tatumio/tatum");
const fs = require("fs").promises;

const uploadToIPFS = async (filePath) => {
    //create buffer from file 2.jpg

    const buffer = await fs.readFile(filePath);

    process.env.TATUM_API_KEY = "9d937646-47ff-452f-a2e5-ec682061cf4b";
    const data = await ipfsUpload(buffer, "filename.jpg");
    //console.log(data);
    //image 2.jpg
    // const ipfsId = await ipfsGet(
    //     "bafybeic7i6f6pfror5s4yd62pgaseurce27kppdp4yueokydgix7etnz2m"
    // );

    //FOR METADATA.JSON
    // const ipfsId2 = await ipfsGet(
    //     "bafkreias4wmnv3fn4yfqjzet6robgt7mskd2y5drcfgzlumzlnh3mungza"
    // );

    console.log(data);
    return data;
};

//uploadToIPFS a file
uploadToIPFS("3.jpg");
