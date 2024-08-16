// src/App.js
import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import axios from 'axios';
import './App.css'; 

function App() {
  const [army, setArmy] = useState([]);

  const enlistBot = (bot) => {
    if (!army.some(armyBot => armyBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  const dischargeBot = (id) => {
    axios.delete(`http://localhost:8001/bots/${id}`)
      .then(() => setArmy(army.filter(bot => bot.id !== id)))
      .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div className="App">
      
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection enlistBot={enlistBot} army={army} />
    </div>

  );
}

export default App;
