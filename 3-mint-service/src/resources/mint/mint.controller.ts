import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import HttpException from "@/utils/exceptions/http.exception";
import MintService from "@/resources/mint/mint.service";
import getErrorMessage from "@/utils/exceptions/message.exception";
import MintSchema from "@/utils/definitions/joi/mint.definitions";

class MintController implements Controller {
    public path = "/";
    public router = Router();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        //check if route works

        this.router.post(this.path, this.mintNFT);
    }

    private mintNFT = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        console.log("mintNFT");
        try {
            const IPFSurl = String(req.body.IPFSurl);
            const tokenId = String(req.body.tokenId);
            const wallet = String(req.body.wallet);
            const contractAddress = String(req.body.contractAddress);
            const privateKey = String(req.body.privateKey);

            //validate input with joi
            await MintSchema.validateAsync({
                IPFSurl,
                tokenId,
                wallet,
                contractAddress,
                privateKey,
            });

            //mint NFT function call
            const NFT = await new MintService().mintNFT(
                IPFSurl,
                tokenId,
                wallet,
                contractAddress,
                privateKey
            );

            return res.status(201).json({ NFT });
        } catch (error) {
            console.log(error);
            next(new HttpException(400, getErrorMessage(error)));
        }
    };
}

export default MintController;
