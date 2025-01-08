import React, { useState } from 'react';
import axios from 'axios';

function TicketPurchase() {
    const [formData, setFormData] = useState({ user_id: '', event_id: '' });
    const [qrCode, setQrCode] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/purchase', formData);
            setQrCode(response.data.qr_code);
            alert(response.data.message);
        } catch (error) {
            alert('Purchase failed');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user_id" placeholder="User ID" onChange={handleChange} required />
                <input type="text" name="event_id" placeholder="Event ID" onChange={handleChange} required />
                <button type="submit">Purchase Ticket</button>
            </form>
            {qrCode && (
                <div>
                    <h3>Your Ticket QR Code</h3>
                    <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />
                </div>
            )}
        </div>
    );
}

export default TicketPurchase;
