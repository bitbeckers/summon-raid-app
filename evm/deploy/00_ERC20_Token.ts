import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre; // we get the deployments and getNamedAccounts which are provided by hardhat-deploy.
  const { deploy } = deployments; // The deployments field itself contains the deploy function.

  const { deployer } = await getNamedAccounts(); // Fetch the accounts. These can be configured in hardhat.config.ts as explained above.

  //address _owner,
  //uint256 totalCap
  await deploy("ERC20_Token", {
    from: deployer,
    args: [],
    log: true,
  });
};

export default deploy;
deploy.tags = ["local", "staging"];
