// Importing necessary modules and components from React, react-chatbot-kit, and other custom files
import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../../configs/chatbotConfig"; // Importing the chatbot configuration
import MessageParser from "../../chatbot/MessageParser"; // Importing the MessageParser component
import ActionProvider from "../../chatbot/ActionProvider"; // Importing the ActionProvider component
import { Icon } from '@iconify/react'; // Importing Icon component from the iconify/react library
import logo from '../../icons/logo.svg'; // Importing the logo SVG file

// Functional component representing the Student Bot page
const StudBot = () => {
    return (
        <>
            {/* Container with styling for centering and scaling */}
            <div className=" w-max mx-auto pt-20 scale-110">
                {/* Chatbot component with configuration, MessageParser, and ActionProvider */}
                <Chatbot
                    config={config} // Chatbot configuration
                    messageParser={MessageParser} // MessageParser component
                    actionProvider={ActionProvider} // ActionProvider component
                />
            </div>
        </>
    )
};

// Exporting the StudBot component
export default StudBot;
