import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import getErrorMessage from "@/utils/exceptions/message.exception";
import HttpException from "@/utils/exceptions/http.exception";
//import ipfs schema
import IPFSSchema from "@/utils/definitions/joi/ipfs.definitions";
import IPFSService from "@/resources/ipfs/ipfs.service";
import multer from "multer";
import { ipfsUpload } from "@tatumio/tatum";

class IPFSController implements Controller {
    public path = "/";
    public router = Router();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        //check if route works

        this.router.post(
            this.path,
            this.upload.single("image_data"),
            this.uploadToIPFS
        );
    }

    private upload = multer({
        storage: multer.memoryStorage(),
        limits: {
            fileSize: 5 * 1024 * 1024, //5mb
        },
    });

    private uploadToIPFS = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            //uploaded file with multer
            const image_data = req.file?.buffer;

            const name = String(req.body.name);
            const description = String(req.body.description);
            let image = String(req.body.image); //image url will be changed to ipfs url if image is undefined and image data found.

            //check name and description
            if (name == "undefined" || description == "undefined") {
                throw new HttpException(400, "Missing name or description");
            }

            //check image
            if (image == "undefined" && image_data !== undefined) {
                //upload image_data buffer to IPFS
                const ipfs_data = await ipfsUpload(image_data, name);
                image = ipfs_data.ipfsHash;
                console.log("image uploaded successfully", image);
            }

            //validate input with joi
            await IPFSSchema.validateAsync({
                name,
                description,
                image,
            });

            //mint NFT function call
            const NFT = await new IPFSService().uploadToIPFS(
                name,
                description,
                image
            );

            return res.status(201).json({
                image,
                json: NFT.data,
            });
        } catch (error) {
            console.log(error);
            next(new HttpException(400, getErrorMessage(error)));
        }
    };
}

export default IPFSController;
