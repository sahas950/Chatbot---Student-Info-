// Importing necessary module and component from React
import React, { useState } from "react";

// Intro component for displaying an introductory message
const Intro = (props) => {
    // State variable to manage the visibility of the component
    const [visible, setVisible] = useState(true);

    // Click event handler to trigger actions and hide the component
    const handleClick = () => {
        // Triggering actions for handling the introduction and displaying slot options
        props.actionProvider.handleIntro();
        props.actionProvider.handleSlotOptions();

        // Hiding the component by updating the state
        setVisible(false);
    }

    // Rendering the component conditionally based on visibility
    return (
        <>
            {visible &&
                // Button for user interaction, triggering the handleClick event
                <button className="bg-gray-300 w-fit py-1 px-2 ml-12 rounded-lg text-sm button-class" onClick={handleClick}>
                    Got It!
                </button>
            }
        </>
    );
};

// Exporting the Intro component
export default Intro;
