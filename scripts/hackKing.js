const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const address = "0x60B774330645846d0Dad2E5587aDec5CcAbed1BE";
  const hack = await ethers.getContractFactory("hackKing");
  const Hack = await hack.deploy(address, {value: ethers.utils.parseEther("0.001")});
  await Hack.deployed();
  console.log("Hack deployed at: ", Hack.address);
  // 0x3779dFFe980C427FF1F87d53A3116ac3fbA74BEE

  //const newKing = await Hack._king();
  //console.log(newKing);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
