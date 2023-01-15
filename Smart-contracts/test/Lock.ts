import { expect } from "chai";
import { ethers } from "hardhat";

describe("MintNFT", function () {
  it("uri", async function () {
    const MintNFT = await ethers.getContractFactory("MintNFT");
    const nft = await MintNFT.deploy(
      "ipfs://<some-ipfs-url>/nft-",
      [1, 1, 2, 3]
    );
    await nft.deployed();

    expect(await nft.uri(0)).to.equal("ipfs://<some-ipfs-url>/nft-0");
  });

  it("deployment should assign total supply to sender", async () => {
    const [owner] = await ethers.getSigners();
    const MintNFT = await ethers.getContractFactory("MintNFT");
    const nft = await MintNFT.deploy(
      "ipfs://<some-ipfs-url>/nft-",
      [1, 1, 2, 3]
    );
    await nft.deployed();

    const balances = await nft.balanceOfBatch(
      [owner.address, owner.address, owner.address, owner.address],
      [0, 1, 2, 3]
    );
    expect(balances).to.deep.equal([
      ethers.BigNumber.from(1),
      ethers.BigNumber.from(1),
      ethers.BigNumber.from(2),
      ethers.BigNumber.from(3),
    ]);
  });

  it("setURI", async () => {
    const MintNFT = await ethers.getContractFactory("MintNFT");
    const nft = await MintNFT.deploy(
      "ipfs://<some-ipfs-url>/nft-",
      [1, 1, 2, 3]
    );
    await nft.deployed();

    await nft.setURI("https://server-cdn.com/nft-");
    expect(await nft.uri(0)).to.equal("https://server-cdn.com/nft-0");
  });
});