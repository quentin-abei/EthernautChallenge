const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "process.env.ALCHEMY_URL"
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const contractAddress = "0xcaA72B730881a8aD30D365dBcD138DFd4F24814F";

  //const coinFlip = await hre.ethers.getContractFactory("Hack");
  //const CoinFlip = await coinFlip.deploy(contractAddress);
  //await CoinFlip.deployed();

  //console.log("Hack deployed at: ", CoinFlip.address);

  // call flip()
  const CoinFlip = await hre.ethers.getContractAt(
    "Hack",
    contractAddress,
    wallet
  );

  const flip = await CoinFlip.flip();
  console.log(flip.hash);

  console.log("Hack completed, another level unlocked");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
