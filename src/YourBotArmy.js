// src/components/YourBotArmy.js
import React from 'react';
import BotProfile from './BotProfile';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      <h1>MY BOT ARMY (ENLISTED BOTS)</h1>
      <div className="bot-army">
        {army.map(bot => (
          <BotProfile
            key={bot.id}
            bot={bot}
            onRelease={releaseBot}
            onDischarge={dischargeBot}
            isEnlisted={true}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
