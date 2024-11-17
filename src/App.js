import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import VolunteerRegistration from './components/VolunteerRegistration';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/volunteer/register" element={<VolunteerRegistration />} />
                <Route path="/organization-login" element={<div>Organization Login/Signup</div>} />
            </Routes>
        </Router>
    );
}

export default App;
