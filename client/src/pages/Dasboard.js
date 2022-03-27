import React, { useEffect, useContext, useState } from 'react';
import { GlobalState } from '../GlobalState';
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from '../utils/getWeb3'

const Dasboard = () => {
  const {
    user,
    signOut
  } = useContext(GlobalState)

  const [state,setState] = useState({ storageValue: 0, web3: null, accounts: null, contract: null })


  useEffect(() => {
    load()
  },[])

  const load = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      setState(prev => ({ ...prev, web3, accounts, contract: instance }));
      await instance.methods.set(5).send({ from: accounts[0] })
      const response = await instance.methods.get().call();
      setState((prev)=>({ ...prev, storageValue: response }))
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }



  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4">Dashboard</h1>
                <p className="text-xl text-gray-600">Welcome {user.name} ({user.email})</p>
                <button onClick={signOut} className="text-[#0000ff] cursor-pointer underline">Sign Out</button>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default Dasboard;