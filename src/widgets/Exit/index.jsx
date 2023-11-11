// Importing necessary modules and components from React and React Router
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Exit component to navigate to the "/studinfo" route after a countdown
const Exit = (props) => {
    // Accessing the navigate function from React Router
    const navigate = useNavigate();
    
    // State variable to manage the countdown in seconds
    const [seconds, setSeconds] = useState(5);

    // useEffect hook to handle the countdown
    useEffect(() => {
        // Check if the countdown reaches 0
        if (seconds === 0) {
            return;
        }

        // Set up an interval to decrement the countdown every second
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [seconds]);

    // If the countdown reaches 0, navigate to the "/studinfo" route
    if (seconds === 0) {
        navigate("/studinfo");
    }

    // Rendering the component with a countdown display
    return (
        <>
            <div className="app">
                <div className="time">{seconds}s</div>
            </div>
        </>
    );
};

// Exporting the Exit component
export default Exit;
