import React, { useState } from 'react';
import WalletConnection from './components/WalletConnection';
import CurrentTime from './components/CurrentTime';
import CUSDTransfer from './components/CUSDTransfer';
import './App.css';

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="app">
      <header>
        <CurrentTime />
        <WalletConnection isConnected={isConnected} setIsConnected={setIsConnected} />
      </header>
      {isConnected && <CUSDTransfer />}
    </div>
  );
};

export default App;
