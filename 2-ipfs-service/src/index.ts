import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/validations/validate.env";
import App from "./app";
import IPFSController from "@/resources/ipfs/ipfs.controller";

validateEnv();

export const app = new App([new IPFSController()], Number(process.env.PORT));

app.listen();
