// Importing necessary functions and components from external modules
import { createChatBotMessage } from "react-chatbot-kit";
import Intro from "../widgets/Intro/Intro";
import Calendar from "../widgets/Calendar";
import UserAge from "../widgets/UserAge";
import Exit from "../widgets/Exit";
import CoBotAvatar from "./CoBotAvatar";
import UserAvatar from "./UserAvatars";

// Defining the bot name
const botName = 'Student Bot';

// Configuration object for the chatbot
const config = {
    // Setting the bot name
    botName: botName,
    
    // Initial messages displayed when the chat starts
    initialMessages: [
        createChatBotMessage(`Hello, Welcome to student info system!`,
            {
                // Initial widget to be displayed
                widget: 'intro'
            }
        )
    ],
    
    // Defining different widgets that the chatbot can use
    widgets: [
        {
            widgetName: 'intro',
            // The component associated with the 'intro' widget
            widgetFunc: (props) => <Intro {...props} />,
        },
        {
            widgetName: 'calendar',
            widgetFunc: (props) => <Calendar {...props} />
        },
        {
            widgetName: 'age',
            widgetFunc: (props) => <UserAge {...props} />
        },
        {
            widgetName: 'exit',
            widgetFunc: (props) => <Exit {...props} />
        }
    ],
    
    // Custom styling for different parts of the chat UI
    customStyles: {
        botMessageBox: {
            backgroundColor: 'rgb(41, 61, 188)',
        },
        chatButton: {
            backgroundColor: '#004086',
        },
    },
    
    // Custom components for bot and user avatars
    customComponents: { 
        botAvatar: (props) => <CoBotAvatar {...props} />, 
        userAvatar: (props) => <UserAvatar {...props} />
    },
}

// Exporting the chatbot configuration
export default config;
