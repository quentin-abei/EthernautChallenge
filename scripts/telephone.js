const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = "0x0A4d2d031318F153f043AD0B689162D2ca127329";
  const tel = await hre.ethers.getContractFactory("HackTelephone");
  const Tel = await tel.deploy(contractAddress);
  await Tel.deployed();

  console.log(
    "HackTelephone successfull!, address of HackTelephone: ",
    Tel.address
  );
  //0x2Cf67E0e6E89c833243C0F502CaDA6312D365Bf4
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
