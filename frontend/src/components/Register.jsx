import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/register', formData);
            alert(response.data.message);
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;