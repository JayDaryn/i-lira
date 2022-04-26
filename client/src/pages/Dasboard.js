import React, { useEffect, useContext, useState } from 'react';
import { GlobalState } from '../GlobalState';

const Dasboard = () => {
  const {
    account,
    contract,
    signOut
  } = useContext(GlobalState)

  const [storageValue, setStorageValue] = useState(70)
  const [inputVal, setInput] = useState(null)


  useEffect(() => {
    (async () => {
      
    // const response = await contract.methods.get().call();
    // if(response){
    //   setStorageValue(response)
    // }
    })()
    const script = document.createElement('script');

    script.src = "https://widget.nomics.com/embed.js";
    script.async = true;

    document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  }
  },[])

  const set = async () => {
    try {
      await contract.methods.set(inputVal).send({ from: account })
      const response = await contract.methods.get().call();
      setStorageValue(response)
    } catch (error) {
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
                <h1 className="h1 mb-4">Dashboard Coming Soon!</h1>
                <p className="text-md text-gray-600">connected: {account}</p>
                {/* <div className='m-10'>
                  <p className="text-xl text-gray-600">Stored value on blockchain: {storageValue}</p>
                  <input type='number' value={inputVal} onChange={(e)=>setInput(e.target.value)}/>
                  <button onClick={set} className="text-gray-100 cursor-pointer p-2 bg-blue-500 m-2">set</button>
                </div> */}
                <div className='m-10'>
                  <div className="nomics-ticker-widget" data-name="PancakeSwap" data-base="BNB" data-quote="USD"></div>
                </div>
                  {/* <a target='_blank' className="text-gray-100 cursor-pointer p-2 bg-blue-500" href='https://pancakeswap.finance/swap?outputCurrency=0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51' rel="noreferrer" >Buy Bunny Token</a> */}
                <div className='m-10'>
                  <button onClick={signOut} className="text-[#0000ff] cursor-pointer underline">Sign Out</button>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default Dasboard;