import { useState } from 'react';
import { ethers } from 'ethers';
import Gtoken from './GToken.json';
import './App.css';

const Gtokenaddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

function App() {
  async function fetchTokens(){
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(Gtokenaddress, Gtoken.abi, provider)
      try {
       
        const GOLD = await contract.balanceOf(signer,0); 
        const Silver = await contract.balanceOf(signer,1);
        const Thor = await contract.balanceOf(signer,3); 
        const Loki = await contract.balanceOf(signer,4);
        const thorshammer = await contract.balanceOf(signer,2);
        console.log('data: ', GOLD,Silver, Thor,thorshammer,Loki)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }
  

  async function buyGold(){
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(Gtokenaddress, Gtoken.abi, signer)
      try {
        await contract.buyGold();
               
      } catch (err) {
        console.log("Error: ", err)
      }
    } 
  }

  
  
  async function buySilver(){
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(Gtokenaddress, Gtoken.abi, signer)
      try {
        await contract.buySilver();
               
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
   
  }
  async function buyCharacter(){
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(Gtokenaddress, Gtoken.abi, signer)
      try {
        await contract.buyCharacter();
               
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }
  async function buythorshammer(){

    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(Gtokenaddress, Gtoken.abi, signer)
      try {
        await contract.buythorshammer();
               
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }
  async function requestAccount(){
    await window.etehreum.request({method: 'eth_requestAccounts'});
  }
  return (
    <div className="App">
        <button onClick= {buyGold}>Buy Gold</button> <br/>
        <button onClick= {buySilver}>Buy Silver</button> <br/>
        <button onClick= {buyCharacter}>Buy Character</button><br/>
        <button onClick= {buythorshammer}>Buy Thor hammer</button><br/>
      
    </div>
  );
}

export default App;
