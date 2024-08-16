// src/components/BotProfile.js
import React from 'react';

function BotProfile({ bot, onEnlist, onRelease, onDischarge, isEnlisted }) {
  return (
    <div className="bot-profile">
      <img src={bot.avatar_url} alt={bot.name} width="100" />
      <h2>{bot.id}</h2>
      <p>name: {bot.name}</p>
      <p>Health: {bot.health}</p>
      <p>damage: {bot.health}</p>
      <p>armor: {bot.armor}</p>
      <p>bot_class: {bot.bot_class}</p>
      <p>catchphrase: {bot.catchphrase}</p> 
     
      {!isEnlisted ? (
        <button onClick={() => onEnlist(bot)}>Enlist</button>
      ) : (
        <div>
          <button onClick={() => onRelease(bot.id)}>Release</button>
          <button onClick={() => onDischarge(bot.id)} style={{color: 'red'}}>Discharge (x)</button>
        </div>
      )}
    </div>
  );
}

export default BotProfile;
