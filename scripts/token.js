const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = "0x2f5691Fae54AD60b5f790d6647064b5b7bD1065b";
  const token = await hre.ethers.getContractFactory("HackToken");
  const Token = await token.deploy(contractAddress);
  await Token.deployed();

  console.log("HackToken successfull!, address of HackToken: ", Token.address);
  //
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x2FE7f3D97f2dd01beac668238dCC2f9444C0ae96
