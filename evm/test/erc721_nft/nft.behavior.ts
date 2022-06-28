import { expect } from "chai";

import setupTest from "../setup";

export function shouldBehaveLikeERC721NFT(): void {
  it("has the deployer as default owner", async function () {
    const { nft, deployer } = await setupTest();

    expect(await nft.owner()).to.be.eq(deployer.address);
  });

  it("allows for transfering the ownership", async function () {
    const { nft, deployer, owner } = await setupTest();

    await deployer.nft.transferOwnership(owner.address);

    expect(await nft.owner()).to.be.eq(owner.address);
  });

  it("can mint a NFT based on a given ID and only once", async () => {
    const { nft, deployer } = await setupTest();

    await expect(nft.tokenURI(0)).to.be.reverted;

    await expect(nft.safeMint(deployer.address, 0, "0.json"))
      .to.emit(nft, "Transfer")
      .withArgs("0x0000000000000000000000000000000000000000", deployer.address, 0);

    expect(await nft.tokenURI(0)).to.be.eq(
      "https://gateway.pinata.cloud/ipfs/QmaUK792RLARk4y3yZww1tnvu5GGAXdVqKYVr76dwrHVfp/0.json",
    );
    expect(await nft.ownerOf(0)).to.be.eq(deployer.address);

    await expect(nft.safeMint(deployer.address, 0, "0.json")).to.be.reverted;
  });
}
