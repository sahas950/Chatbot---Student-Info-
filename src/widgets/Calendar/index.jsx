// Importing necessary modules and components from React and Redux
import React, { useEffect, useState } from "react";
import data from "./data"; // Importing data for date and time slots
import './style.css'; // Importing styles for the calendar component

import { useDispatch } from 'react-redux';
import { updateDate } from "../../features/user/userSlice"; // Importing the updateDate action

// Calendar component for selecting date and time slots
const Calendar = (props) => {
    // State variables to manage selected date, time, and component visibility
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [hidden, setHidden] = useState(false);

    // Redux dispatch hook to dispatch actions
    const dispatch = useDispatch();

    // useEffect hook to handle actions when date and time are selected
    useEffect(() => {
        if (date && time) {
            // Triggering actions for slot booking and inputting name
            props.actionProvider.handleSlotBooking(date, time);
            props.actionProvider.handleInputName();
            
            // Dispatching the updateDate action with the selected date and time
            dispatch(updateDate({ date, time }));

            // Resetting date and time states and hiding the component
            setDate(null);
            setTime(null);
            setHidden(true);
        }
        // eslint-disable-next-line
    }, [date, time]);

    return (
        // Container for the calendar component
        <div className="flex flex-col">
            {!hidden && // Conditional rendering based on the visibility of the component
                <>
                    {/* Container for date slots */}
                    <div className="flex overflow-auto date-container">
                        {/* Mapping through date slots and displaying them */}
                        {data.dateSlots.map((slot, i) => {
                            return (
                                <div key={i} className={`flex flex-col items-center m-2 ml-0 text-xs shadow-lg  min-w-fit shadow-slate-300 ${date === slot ? 'bg-blue-400 text-white font-semibold' : ''}  py-1 px-5 rounded-lg transition-all ease-in`} onClick={() => setDate(slot)}>
                                    <button className="">
                                        {slot.date} {slot.month}
                                        <p className={`text-slate-500 ${date === slot ? 'bg-blue-400 text-white font-semibold' : ''}`}>
                                            {slot.day}
                                        </p>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    {/* Centered container for time slots */}
                    <center>
                        <div className={``}>
                            {/* Mapping through time slots and displaying them */}
                            {data.timeSlots.map((slotPhase, i) => {
                                return (
                                    <div className="flex flex-col my-3" key={i}>
                                        <span className="text-[11px] text-slate-700">{slotPhase.phase}</span>
                                        {/* Container for individual time slots */}
                                        <div className="flex py-1 px-9">
                                            {/* Mapping through time slots within a phase and displaying them */}
                                            {slotPhase.data.map((slot, ind) => {
                                                return (
                                                    <div key={ind} className={`my-2 ml-0 mr-3 text-xs shadow-lg shadow-slate-300 ${time === slot ? 'bg-blue-400 text-white font-semibold' : ''}  py-1 px-2 rounded-md transition-all ease-in`} onClick={() => setTime(slot)}>
                                                        <button className="">
                                                            {slot.time} {slot.label}
                                                        </button>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </center>
                </>
            }
        </div>
    );
};

// Exporting the Calendar component
export default Calendar;
