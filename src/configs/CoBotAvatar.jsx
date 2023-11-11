// Importing necessary module and component from React
import React from "react";

// Importing the BotAvatar SVG file
import BotAvatar from "../icons/bot.svg";

// Functional component representing the custom avatar for the chatbot
const CoBotAvatar = () => {
  return (
    // Container for the chatbot avatar with styling
    <div className="react-chatbot-kit-chat-bot-avatar">
      {/* Container for the avatar image with background styling */}
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        {/* Displaying the BotAvatar image */}
        <img alt="BotAvatar" src={BotAvatar} />
      </div>
    </div>
  );
};

// Exporting the CoBotAvatar component
export default CoBotAvatar;
