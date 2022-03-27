import React, { useEffect, useContext } from 'react';
import { GlobalState } from '../GlobalState';

const Dasboard = () => {
  const {
    user,
    signOut
  } = useContext(GlobalState)


  useEffect(() => {
    
  },[])

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