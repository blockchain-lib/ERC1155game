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

// describe("Deployment", function(){
//     it('deploys sucessfully', async function(){
//       const address = nft.address;
//       expect(address).to.not.equal(0x0);
//       expect(address).to.not.equal(null);
//       expect(address).to.not.equal('');
//       expect(address).to.not.equal(undefined);
//       expect(address).to.not.equal(0x0);
// });