// Importing necessary modules and components from external libraries and files
import React from 'react';
import { updateName, selectUser } from "../features/user/userSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

// MessageParser component responsible for parsing user messages and triggering actions
const MessageParser = ({ children, actions }) => {
    // Redux dispatch hook to dispatch actions
    const dispatch = useDispatch();
    
    // Redux useSelector hook to retrieve user state
    const user = useSelector(selectUser);

    // Function to parse and handle user messages
    const parse = (message) => {
        // Convert the message to lowercase for case-insensitive comparisons
        const lowercase = message.toLowerCase();

        // Check if the user is in the process of entering their name
        if (user.chkn === "true") {
            // If yes, trigger the action to handle input for age and update the user's name
            actions.handleInputAge();
            dispatch(updateName(message));
        } else if (lowercase.includes("hello")) {
            // If the message includes "hello", trigger the greeting action
            actions.greet();
            return;
        } else {
            // If none of the conditions are met, trigger the action for handling exceptions
            actions.handleException();
            return;
        }
    };

    // Mapping parsed messages and actions to children components
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: actions,
                });
            })}
        </div>
    );
};

// Exporting the MessageParser component
export default MessageParser;
