const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = "0x2356C46B99137BFc1a46D148096B4FEABC0614e8";
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.ALCHEMY_URL
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const vault = await hre.ethers.getContractAt(
    "Vault",
    contractAddress,
    wallet
  );

  const unlock = await vault.unlock(
    "0x412076657279207374726f6e67207365637265742070617373776f7264203a29"
  );

  console.log("Hack successfull!: ", unlock.hash);

  /* const force = await hre.ethers.getContractAt(
    "Force",
    contractAddress,
    wallet
  );*/
  //
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x2FE7f3D97f2dd01beac668238dCC2f9444C0ae96
