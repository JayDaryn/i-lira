import React, {useEffect, createContext, useState} from 'react'
// import useLocalStorage from './utils/useLocalStrorage'

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";
import SimpleStorageContract from "./contracts/SimpleStorage.json";

import axios from 'axios'
const baseurl = ''

const web3Modal = new Web3Modal({
  providerOptions:{
    binancechainwallet: {
      package: true
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "80547483608c4225a6b35e2a7fb2ddca"
      }
    },
    authereum: {
      package: Authereum
    }
  }
});

const initialState = {
	httpLoading: false,
  restoringSession: false,
	web3: null,
	account: null,
  contract: null
}

export const GlobalState = createContext(initialState)

export const GlobalStateWrapper = props => {
  const [state, setState] = useState(initialState)
  // const [session, setSession] = useLocalStorage("session", {});

  useEffect(() => {
    (async () => {
      // Load Session here
      setState(prevState => ({...prevState, restoringSession:true }))
      let web3 = null
      if (window.ethereum) {
          web3 = new Web3(window.ethereum);
      } else if (window.web3) {
          web3 = new Web3(window.web3.currentProvider);
      }

      if(web3) {
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = SimpleStorageContract.networks[networkId];
        const contract = new web3.eth.Contract(
          SimpleStorageContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
        setState(prevState => ({...prevState, web3, account:accounts[0], contract, restoringSession:false }))
      } else {
        setState(prevState => ({...prevState, restoringSession:false }))
      }
    })()
  }, [])

  const actions = {
    connectWallet: async () => {
      try {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = SimpleStorageContract.networks[networkId];
        const contract = new web3.eth.Contract(
          SimpleStorageContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
        setState(prevState => ({...prevState, web3, account:accounts[0], contract}))
      } catch (error) {
        if(error.message){
          window.alert(error.message)
        }
      }
      
    },
    signOut: async () => {
			setState(initialState)
    },
    httpGet: async (url) => {
      setState(prevState => ({ ...prevState, httpLoading: true }))
      const headers = { 'Content-Type': 'application/json' }
      if (state.token !== null) {
        headers.Authorization = 'Bearer ' + state.token
      }
      try {
        const resp = await axios.get(baseurl + url, { headers })
        setState(prevState => ({ ...prevState, httpLoading: false }))
        return resp
      } catch (error) {
        console.log(error.response.data)
        setState(prevState => ({ ...prevState, httpLoading: false }))
        throw new Error('Request Failed')
      }
    },
    httpPost: async (url, body) => {
      setState(prevState => ({ ...prevState, httpLoading: true }))
      const headers = { 'Content-Type': 'application/json' }
      if (state.token !== null) {
        headers.Authorization = 'Bearer ' + state.token
      }
      try {
        const resp = await axios.post(baseurl + url, body, { headers })
        setState(prevState => ({ ...prevState, httpLoading: false }))
        return resp
      } catch (error) {
        console.log(error.response.data)
        setState(prevState => ({ ...prevState, httpLoading: false }))
        throw new Error('Request Failed')
      }
    },
    httpPatch: async (url, body) => {
      setState(prevState => ({ ...prevState, httpLoading: true }))
      const headers = { 'Content-Type': 'application/json' }
      if (state.token !== null) {
        headers.Authorization = 'Bearer ' + state.token
      }
      try {
        const resp = await axios.patch(baseurl + url, body, { headers })
        setState(prevState => ({ ...prevState, httpLoading: false }))
        return resp
      } catch (error) {
        console.log(error.response.data)
        setState(prevState => ({ ...prevState, httpLoading: false }))
        throw new Error('Request Failed')
      }
    },
    httpDelete: async (url) => {
      setState(prevState => ({ ...prevState, httpLoading: true }))
      const headers = { 'Content-Type': 'application/json' }
      if (state.token !== null) {
        headers.Authorization = 'Bearer ' + state.token
      }
      try {
        const resp = await axios.delete(baseurl + url, { headers })
        setState(prevState => ({ ...prevState, httpLoading: false }))
        return resp
      } catch (error) {
        console.log(error.response.data)
        setState(prevState => ({ ...prevState, httpLoading: false }))
        throw new Error('Request Failed')
      }
    }
  }

  return (
    <GlobalState.Provider value={{ ...state, ...actions }}>
      {props.children}
    </GlobalState.Provider>
  )
}
