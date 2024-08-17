// src/components/BotCollection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotProfile from './BotProfile';
// axios is a react app used when working with HTTP requests
function BotCollection({ enlistBot, army }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get('https://json-server-vercel-peach-seven.vercel.app/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div>
      <h1>MY BOT COLLECTION</h1>
      <div className="bot-collection">
        {bots.map(bot => (
          <BotProfile
            key={bot.id}
            bot={bot}
            onEnlist={enlistBot}
            isEnlisted={army.some(armyBot => armyBot.id === bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
