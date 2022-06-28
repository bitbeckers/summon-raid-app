import { parseEther } from "ethers/lib/utils";
import { deployments } from "hardhat";

const setupTest = deployments.createFixture(async ({ deployments, getNamedAccounts, ethers }) => {
  await deployments.fixture(); // ensure you start from a fresh deployments
  const { deployer, owner, user } = await getNamedAccounts();

  // Approvals
  const token = await ethers.getContract("ERC20_Token");
  const nft = await ethers.getContract("ERC721_NFT");

  return {
    token,
    nft,
    deployer: {
      address: deployer,
      token: await ethers.getContract("ERC20_Token", deployer),
      nft: await ethers.getContract("ERC721_NFT", deployer),
    },
    owner: {
      address: owner,
      token: await ethers.getContract("ERC20_Token", owner),
      nft: await ethers.getContract("ERC721_NFT", owner),
    },
    user: {
      address: user,
      token: await ethers.getContract("ERC20_Token", user),
      nft: await ethers.getContract("ERC721_NFT", user),
    },
  };
});

export default setupTest;
