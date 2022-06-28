import { expect } from "chai";
import { ethers } from "ethers";

import setupTest from "../setup";

export function shouldBehaveLikeERC20Token(): void {
  it("has the deployer as default owner", async function () {
    const { token, deployer } = await setupTest();

    expect(await token.owner()).to.be.eq(deployer.address);
  });

  it("allows for transfering the ownership", async function () {
    const { token, deployer, owner } = await setupTest();

    await token.transferOwnership(owner.address);

    expect(await deployer.token.owner()).to.be.eq(owner.address);
  });

  it("only allows the owner to mint new tokens", async function () {
    const { token, deployer, user } = await setupTest();

    await expect(user.token.mint(deployer.address, ethers.utils.parseEther("10"))).to.be.revertedWith(
      "Ownable: caller is not the owner",
    );

    await expect(deployer.token.mint(user.address, ethers.utils.parseEther("666")))
      .to.emit(token, "Transfer")
      .withArgs("0x0000000000000000000000000000000000000000", user.address, ethers.utils.parseEther("666"));
  });
}
