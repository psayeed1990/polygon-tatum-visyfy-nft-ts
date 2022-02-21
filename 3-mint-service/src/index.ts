import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/validations/validate.env";
import App from "./app";
import MintController from "@/resources/mint/mint.controller";

validateEnv();

export const app = new App([new MintController()], Number(process.env.PORT));

app.listen();
