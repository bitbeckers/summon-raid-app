import { expect } from "chai";

import setupTest from "../setup";
import { shouldBehaveLikeERC20Token } from "./token.behavior";

describe("Unit tests", function () {
  describe("ERC20 Token", function () {
    it("is a basic ERC20 token", async () => {
      const { token } = await setupTest();
      expect(await token.name()).to.be.eq("MockRaid");
      expect(await token.decimals()).to.be.eq(18);
      expect(await token.symbol()).to.be.eq("MRD");
    });

    it("starts with a supply of 0", async () => {
      const { token } = await setupTest();
      expect(await token.totalSupply()).to.be.eq(0)
    })
    shouldBehaveLikeERC20Token();
  });
});
