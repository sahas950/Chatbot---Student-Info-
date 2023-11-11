// Importing necessary modules and components from external libraries and files
import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { updateChkName } from "../features/user/userSlice";
import { useDispatch } from 'react-redux';

// ActionProvider component that handles different actions based on user input
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    // Redux dispatch hook to dispatch actions
    const dispatch = useDispatch();

    // Function to add a message to the chatbot's state
    const addMessageToState = (message) => {
        setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };

    // Greeting message when the chat starts
    const greet = () => {
        const botMessage = createChatBotMessage(`Hello, Welcome to student info system!`,
            {
                widget: 'intro'
            }
        );

        addMessageToState(botMessage);
    }

    // Handling the introduction acknowledgment
    const handleIntro = () => {
        const botMessage = createClientMessage('Got it!');

        addMessageToState(botMessage);
    };

    // Handling the request for slot options
    const handleSlotOptions = () => {
        const botMessage = createChatBotMessage(
            "Pick a slot!",
            {
                widget: 'calendar',
                delay: 500,
            }
        );

        addMessageToState(botMessage)
    };

    // Handling the user's selected slot booking
    const handleSlotBooking = (date, time) => {
        const botMessage = createClientMessage(
            `${date.date} ${date.month}, ${date.day} ${time.time}${time.label}`,
        );

        addMessageToState(botMessage)
    };

    // Handling the request for user's name input
    const handleInputName = () => {
        const botMessage = createChatBotMessage(
            "Please Enter your name!"
        );
        addMessageToState(botMessage);
        dispatch(updateChkName("true"));
    }

    // Handling the user's entered name
    const handleUserName = (name) => {
        const botMessage = createClientMessage(
            `${name}`,
        );

        addMessageToState(botMessage)
    };

    // Handling the request for user's age input
    const handleInputAge = () => {
        const botMessage = createChatBotMessage(
            "Please Enter your age!",
            {
                widget: 'age',
                delay: 500
            }
        );

        addMessageToState(botMessage);
        dispatch(updateChkName("false"));
    }

    // Handling the user's entered age
    const handleAge = (age) => {
        const botMessage = createClientMessage(
            `${age}`,
        );

        addMessageToState(botMessage)
    };

    // Handling the exit action
    const handleExit = () => {
        const botMessage = createChatBotMessage("Thank you. In 5 seconds, bot will exit", {
            widget: 'exit'
        });

        addMessageToState(botMessage);
    }

    // Handling an exception or unknown input
    const handleException = () => {
        const botMessage = createChatBotMessage("Kindly let me know what else I can help you with.");

        addMessageToState(botMessage);
    };

    // Mapping actions to children components
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        greet,
                        handleIntro,
                        handleSlotOptions, handleSlotBooking,
                        handleInputName, handleUserName,
                        handleInputAge, handleAge,
                        handleExit,
                        handleException,
                    },
                });
            })}
        </div>
    );
};

// Exporting the ActionProvider component
export default ActionProvider;
