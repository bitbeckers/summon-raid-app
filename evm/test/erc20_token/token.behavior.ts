import { expect } from "chai";

import setupTest from "../setup";

export function shouldBehaveLikeERC20Token(): void {
  it("has the deployer as default owner", async function () {
    const { token, deployer } = await setupTest();

    expect(await token.owner()).to.be.eq(deployer.address);
  });

  it("allows for transfering the ownership", async function () {
    const { token, deployer, owner } = await setupTest();

    await token.transferOwnership(owner.address);

    expect(await token.owner()).to.be.eq(owner.address);
  });
}
