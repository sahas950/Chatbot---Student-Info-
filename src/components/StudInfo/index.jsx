// Importing necessary modules and components from React and React Redux
import React from "react";
import { useSelector } from "react-redux";

// Importing the selectUser selector from the userSlice file
import { selectUser } from "../../features/user/userSlice";

// Functional component representing the Student Information page
const StudInfo = () => {
    // Accessing user data from the Redux store using useSelector
    const user = useSelector(selectUser);

    return (
        // Container with text-center alignment and text styling
        <div className="text-center text-2xl pt-32 px-6">
            {
                // Conditional rendering based on whether user information is available
                user.name !== "" ?
                    // If user information is available, display the user's name and age
                    (<span>Your name <b>{user.name}</b> aged <b>{user.age}</b> has been added to the student system.<br /><br />You may now exit</span>) :
                    // If user information is not available, display a message prompting user addition
                    (<span>Please add a user to the system!</span>)
            }
        </div>
    )
};

// Exporting the StudInfo component
export default StudInfo;
