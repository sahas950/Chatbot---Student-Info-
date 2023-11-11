// Importing necessary module and component from React
import React from "react";

// Importing the BotAvatar SVG file for the user avatar
import BotAvatar from "../icons/user.svg";

// Functional component representing the custom avatar for the user
const UserAvatar = () => {
  return (
    // Container for the user avatar with styling
    <div className="react-chatbot-kit-chat-bot-avatar">
      {/* Container for the avatar image with background styling */}
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        {/* Displaying the UserAvatar image */}
        <img alt="BotAvatar" src={BotAvatar} />
      </div>
    </div>
  );
};

// Exporting the UserAvatar component
export default UserAvatar;
