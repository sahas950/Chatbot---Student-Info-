// Importing necessary modules and components from React and React Router
import React from "react";
import { Link } from "react-router-dom";

// Functional component representing the home page
const Home = () => {
    return (
        // Container with styling for centering and padding
        <div className="w-full lg:w-1/2 mx-auto pt-52 px-10">
            {/* Container with flex layout, centered items, background styling, padding, and shadow */}
            <div className="flex flex-col items-center bg-slate-100/50 py-20 px-5 rounded-xl shadow-lg">
                {/* Heading with text styling */}
                <span className="block text-center text-3xl text-slate-100" style={{color:"black"}}>
                    Enter into Student Info System
                </span>

                {/* Button with styling, a link to "/chatbot", and hover effects */}
                <button className="border-2 border-black w-fit p-2 rounded-lg bg-slate-50 mt-8 hover:font-bold hover:-translate-y-1 transition-all ease-in duration-100 hover:ease-out">
                    {/* Link component to navigate to the "/chatbot" route */}
                    <Link to="/chatbot">
                        Enroll Now!
                    </Link>
                </button>
            </div>
        </div>
    )
};

// Exporting the Home component
export default Home;
