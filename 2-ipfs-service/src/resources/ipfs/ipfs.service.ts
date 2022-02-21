import IPFSUploadedResult from "@/resources/ipfs/ipfs.interface";
const fetch = require("node-fetch");
import { ipfsUpload } from "@tatumio/tatum";
import { promises as fs } from "fs";
import fss from "fs";

class IPFSService {
    /**
     * Uplaod to IPFS
     */
    public async uploadToIPFS(
        name: string,
        description: string,
        image: string
    ): Promise<IPFSUploadedResult> {
        /*=============================================
        =           Upload file to IPFS and return data            =
        =============================================*/

        //TODO
        //!1-Generate JSON metadata from input- done
        //!2-Create buffer from metadata file - done
        //!3-Upload metadata to IPFS - done

        //!Data to accept from the user
        //*1 -name,
        //*2 -description,
        //*3 -web url of the image,

        //upload image to IPFS
        const imageBuffer = await fs.readFile(image);
        const imageHash = await ipfsUpload(imageBuffer, name);

        //read external web link image

        // http.get(image, (res) => {
        //     console.log(res);
        // });

        /**
         *
         * gnerate JSON metadata
         *
         */
        const metadata = {
            name,
            description,
            image: `ipfs://${imageHash}`,
        };

        //console.log(image);

        //!1-Generate JSON metadata
        var buffer = Buffer.from(JSON.stringify(metadata));

        const data = await ipfsUpload(buffer, "metadata.json");
        console.log(data);

        return { data };
    }
}

export default IPFSService;
