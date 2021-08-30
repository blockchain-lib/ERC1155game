// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/token/ERC1155/ERC1155.sol";

contract GToken is ERC1155 {
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant THORS_HAMMER = 2;
    uint256 public constant THOR = 3;
    uint256 public constant LOKI = 4;
    address public ownerofThorshammer;
    address public buyer;
    constructor(string memory URI) ERC1155(URI) {
        ownerofThorshammer=msg.sender;
        _mint(msg.sender,2, 1,"");
    }
    function buyGold() public payable{
        require(msg.value>0);
        _mint(msg.sender,0, msg.value/(10**18),"");
    }
     function buySilver() public payable{
         require(msg.value>0);
        _mint(msg.sender,1, msg.value*2/(10**18),"");
    }
    function BuyCharacter(uint tokenID) public payable returns(string memory charactername){
         require(msg.value==50*(10**18));
        require(tokenID==3|| tokenID==4);
        _mint(msg.sender,tokenID, 1,'' );
        if(tokenID==3){
            charactername='THOR';
        }
        else{
            charactername="Loki";
        }
    }
    // function Sellthorshammer(address to) private {
    // require(balanceOf(to,3)>=1, 'You arenot the owner');
    // //  uint[] memory ids;
    // //  ids[0]= 0;
    // //  ids[1]=1;
    // //  uint[] memory value;
    // //  value[0] = 10;
    // //  value[1] =15;
    // //safeBatchTransferFrom(to,msg.sender,ids,value, "");
    // }
    function buythorshammer() public{
    buyer =msg.sender;
    require(balanceOf( buyer,0)>=10);
    require(balanceOf(buyer, 1)>=15);
    require(balanceOf(buyer,3)>=1);
    safeTransferFrom( buyer,ownerofThorshammer, 0, 10, "");
    safeTransferFrom(buyer,ownerofThorshammer, 1, 15, "");
   }
    function sellhammer() public {
        require(balanceOf(msg.sender,2)==1); 
         safeTransferFrom(msg.sender,buyer, 2, 1, "");
         ownerofThorshammer=buyer;
    }
}