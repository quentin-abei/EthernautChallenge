const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const address = "0x60B774330645846d0Dad2E5587aDec5CcAbed1BE";
  const rpc = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, rpc);
  const contract = await ethers.getContractAt("King", address, wallet);

  const prize = await contract.prize();
  console.log("prize: ", prize);
  // prize:  BigNumber { value: "1000000000000000" }
  const king = await contract._king();
  console.log(king);
  // 0x725595BA16E76ED1F6cC1e1b65A88365cC494824
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
