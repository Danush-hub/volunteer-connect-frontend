import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VolunteerRegistration from './VolunteerRegistration';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './LandingPage.css';  // Ensure proper CSS styling is linked

function LandingPage() {
    const [showModal, setShowModal] = useState(false);

    const handleRegisterClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="landing-container">
            <header className="heading-section">
                <h1>Volunteer Connect</h1>
            </header>

            <section className="about-section">
                <h2>About Us</h2>
                <p>
                    Volunteer Connect is a platform designed to bring together passionate individuals and organizations
                    for impactful social causes. By joining us, you will become part of a community that makes a difference
                    through collaboration, commitment, and action.
                </p>
            </section>

            <div className="buttons-container">
                <button onClick={handleRegisterClick} className="main-button">Register as a Volunteer</button>
                <a href="https://volunteer-connect-theta.vercel.app/" target="_self" rel="noopener noreferrer">
                <button className="secondary-button">Organization Login</button></a>
            </div>

            {/* Modal for Volunteer Registration */}
            {showModal && <VolunteerRegistration closeModal={closeModal} />}

            <footer className="footer">
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="social-icon fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="social-icon fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="social-icon fab fa-instagram"></i>
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Volunteer Connect</p>
            </footer>
        </div>
    );
}

export default LandingPage;
