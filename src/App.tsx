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
import SocialMedia from './components/SocialMedia';



function App() {
  return (
      <div>
      <Router>

            <Routes>
              <Route path="/" element={<Navigate to="/overview" />}/>
              <Route path="/overview" element={<ResponsiveDrawer><Graphs/></ResponsiveDrawer>} />
              <Route path='/socialmedia' element={<ResponsiveDrawer><SocialMedia/></ResponsiveDrawer>}/>
            </Routes>
        </Router>
      </div>
  );
}

export default App;
