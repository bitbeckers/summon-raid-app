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
}
