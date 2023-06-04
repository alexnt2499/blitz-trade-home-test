import { JsonRpcUrl } from "@/configs";
import Web3 from "web3";

const provider = new Web3.providers.HttpProvider(JsonRpcUrl);

// Create a new web3 instance
const web3 = new Web3(provider);

export default web3;
