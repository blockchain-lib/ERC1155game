const { expect } = require("chai");
const { ethers } = require('ethers');

describe("Game", function () {
    let gameinstance,addr1,addr2,addr3;
    beforeEach(async ()=> {
        [addr1,addr2,addr3]= await ethers.getSigners();
        const GameInstance = await ethers.getContractFactory("GToken");
        const gameinstance = await GameInstance.deploy();
        await gameinstance.deployed();
        
    })
//   it("should mint GOLD token", async function () {
//         await gameinstance.connect(addr1).buyGold({
//             value: ethers.utils.parseEther("10")});
//         expect(await gameinstance.balanceOf(addr1)).to.equal()
//   });
});