import VoteContext from "./VoteContext";
import { useEffect, useState } from "react";
import Web3 from 'web3';
import { useNavigate } from "react-router-dom";
import vote from '../../contracts/vote.json';


export const VoteState = (props) => {
  const Navigate = useNavigate();

  const [connectedAccount, setCurrentAccount] = useState();
  const [state, setState] = useState({ web3: null, contract: null });

  const getContractInfo = async () => {
    // const conn = checkIfWalletIsConnected();
    // if (!conn) return alert("Meta Mask is not connected!");
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
    const web3 = new Web3(provider)
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = vote.networks[networkId];
    const contract = new web3.eth.Contract(vote.abi, deployedNetwork.address);
    setState({ web3, contract });
  }


  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Meta Mask not Connected!");

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
    <VoteContext.Provider value={{ connectWallet, getContractInfo, connectedAccount, state }}>
      {props.children}
    </VoteContext.Provider>
  )
}
