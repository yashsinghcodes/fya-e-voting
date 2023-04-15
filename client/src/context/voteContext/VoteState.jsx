import VoteContext from "./VoteContext";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Web3 from 'web3';
import { useNavigate } from "react-router-dom";
import vote from '../../contracts/vote.json';

const getContractInfo = async() => {
  const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
  // const contractABI = abi.abi;
  const web3 = new Web3(provider)
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = vote.networks[networkId];
  console.log(deployedNetwork.address);
}


export const VoteState = (props) => {
  const Navigate = useNavigate();

  const [connectedAccount, setCurrentAccount] = useState();

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please Install MetaMask");

    const accounts = await ethereum.request({ method: 'eth_accounts' });
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install MetaMask");
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
      getContractInfo();
      Navigate("/explore");
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <VoteContext.Provider value={{ connectWallet }}>
      {props.children}
    </VoteContext.Provider>
  )
}
