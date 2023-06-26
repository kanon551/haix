import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ResponsiveDrawer from './layout/ResponsiveDrawer';
import Graphs from './components/Graphs';



function App() {
  return (
      <div>
      <Router>
            <Routes>
             <Route path="/" element={<ResponsiveDrawer><Graphs/></ResponsiveDrawer>} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
