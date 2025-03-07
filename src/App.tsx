import React from 'react';
import { Navbar } from './components/Navbar';
import { ContestStatus } from './components/ContestStatus';
import { Sidebar } from './components/Sidebar';
import { TopRated } from './components/TopRated';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Codeforces Blitz Cup 2025
                </h1>
                <div className="prose max-w-none">
                  <p>
                    As announced earlier, we're holding an individual competition, the Codeforces Blitz Cup 2025, 
                    to celebrate 15 years of Codeforces. The tournament features PvP matches in a novel Blitz format 
                    where every second (literally!) counts.
                  </p>
                </div>
              </div>
              
              <ContestStatus />
            </div>
          </div>
          
          <div className="space-y-8">
            <Sidebar title="Pay attention">
              <div className="text-center">
                <p className="font-semibold text-blue-600">Contest is running</p>
                <p className="text-sm text-gray-600 mt-2">
                  XIX Open Olympics in Informatics - Final Stage, Day 1
                </p>
                <p className="text-xs text-gray-500 mt-1">04:46:14</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Register now »
                </button>
              </div>
            </Sidebar>
            
            <TopRated />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;