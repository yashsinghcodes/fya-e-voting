import VoteContext from "./VoteContext";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const getContractInfo = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  // MetaMask requires requesting permission to connect users accounts
  // await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();
  // const transactionContract = new ether.Contract()   //Address, //ABI, signer)

  console.log({
    signer,
    provider
  })
}


export const VoteState = (props) => {
  const Navigate = useNavigate();

  const [connectedAccount, setCurrentAccount] = useState();

  const checkIfWalletIsConnected = async() => {
    if(!ethereum) return alert("Please Install MetaMask");

    const accounts = await ethereum.request({method: 'eth_accounts'});

    console.log(accounts);
  }

  const connectWallet = async() => {
    try{
      if(!ethereum) return alert("Please Install MetaMask");
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      setCurrentAccount(accounts[0]);
      Navigate("/explore");
    } catch (error){
      console.log(error);
    }
  }


  useEffect(() => {
    checkIfWalletIsConnected();
  },[]);

  return (
    <VoteContext.Provider value={{connectWallet}}>
        {props.children}
    </VoteContext.Provider>
  )
}
