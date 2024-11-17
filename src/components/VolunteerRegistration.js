// VolunteerRegistration.js
import React, { useState } from 'react';
import axios from 'axios';
import './VolunteerRegistration.css';

function VolunteerRegistration({ closeModal }) {
    const [volunteer, setVolunteer] = useState({ name: '', email: '', phone: '' });
    const [errors, setErrors] = useState({ email: '', phone: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVolunteer({ ...volunteer, [name]: value });

        // Validation for email format
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
            }
        }

        // Validation for phone number format (only numbers, 10 digits)
        if (name === 'phone') {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(value)) {
                setErrors((prevErrors) => ({ ...prevErrors, phone: 'Phone number must be 10 digits' }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for any remaining validation errors
        if (errors.email || errors.phone) {
            alert('Please fix the errors in the form');
            return;
        }

        try {
            const response = await axios.post("https://volunteer-connect-backend.onrender.com/api/volunteers", volunteer);
            alert(response.data || 'Registration successful!');
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                closeModal(); // Close modal after successful submission
            }, 3000);
        } catch (error) {
            console.error('Error registering volunteer:', error.response?.data || error.message);
            alert(`Registration failed. Error: ${error.response?.data || error.message}`);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="modal-close" onClick={closeModal}>&times;</span>
                <h2>Volunteer Registration</h2>
                <p className="quote">"The best way to find yourself is to lose yourself in the service of others."</p>
                <p>Fill out the form below to join us in making a difference.</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={volunteer.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={volunteer.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                    
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={volunteer.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}
                    
                    <button type="submit">Register</button>
                </form>

                {submitted && <p className="success-animation">Volunteer connected successfully!</p>}
            </div>
        </div>
    );
}

export default VolunteerRegistration;
