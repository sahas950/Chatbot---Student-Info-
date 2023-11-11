// Importing necessary modules and components from React and React Router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing stylesheets for the App component
import "./App.css";
import 'react-chatbot-kit/build/main.css';

// Importing custom components for the application
import StudBot from "./components/StudBot";
import Home from "./components/Home";
import StudInfo from "./components/StudInfo";

// App component representing the main application structure
function App() {
  return (
    <>
      {/* Setting up a Router component to manage navigation */}
      <Router>
        {/* Defining routes using the Routes component */}
        <Routes>
          {/* Route for the home page, rendering the Home component */}
          <Route element={<Home />} path='/'></Route>
          
          {/* Route for the chatbot page, rendering the StudBot component */}
          <Route element={<StudBot />} path='/chatbot'></Route>
          
          {/* Route for the student information page, rendering the StudInfo component */}
          <Route element={<StudInfo />} path='/studinfo'></Route>
        </Routes>
      </Router>
    </>
  );
}

// Exporting the App component
export default App;
