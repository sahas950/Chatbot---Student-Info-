// Importing necessary module and component from React
import React, { useState } from "react";

// Importing useDispatch hook from React Redux for dispatching actions
import { useDispatch } from "react-redux";

// Importing the updateAge action from the userSlice file
import { updateAge } from "../../features/user/userSlice";

// UserAge component for capturing and updating the user's age
const UserAge = (props) => {
    // State variables to manage the selected age and visibility of the component
    const [age, setAge] = useState("");
    const [visible, setVisible] = useState(true);

    // Redux dispatch hook to dispatch actions
    const dispatch = useDispatch();

    // Generating age options from 18 to 40
    const ageOptions = [];
    for (let age = 18; age <= 40; age++) {
        ageOptions.push(age);
    }

    // Event handler for updating the selected age and triggering actions
    const handleAge = (ageValue) => {
        // Setting the selected age
        setAge(ageValue);

        // Triggering actions for handling the age, exiting, and updating the Redux store
        props.actionProvider.handleAge(ageValue);
        props.actionProvider.handleExit();
        dispatch(updateAge(ageValue));

        // Hiding the component by updating the visibility state
        setVisible(false);
    }

    // Rendering the component conditionally based on visibility
    return (
        <div className="">
            {visible &&
                // Dropdown select element for choosing the age
                <select
                    className="text-sm outline outline-1 outline-[black] rounded-md py-1 px-2"
                    value={age} onChange={(e) => handleAge(e.target.value)}>
                    <option value="">Select Age</option>

                    {/* Mapping through age options and displaying them in the dropdown */}
                    {ageOptions.map((age) => (
                        <option key={age} value={age}>
                            {age}
                        </option>
                    ))}
                </select>
            }
        </div>
    );
};

// Exporting the UserAge component
export default UserAge;
