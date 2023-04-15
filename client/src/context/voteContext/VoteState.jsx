import VoteContext from "./VoteContext";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import abi from '../../contracts/vote.json';

const getContractInfo = () => {
  console.log(ethers)
  const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
  const contractAddress = "0x9DEa1eC880c836E875F1e48f535a218a87Ea7bF9";
  const contractABI = abi.abi;
  // MetaMask requires requesting permission to connect users accounts
  // await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = web3Provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)   //Address, //ABI, signer)

  console.log({
    signer,
    provider,
    transactionContract
  })
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
