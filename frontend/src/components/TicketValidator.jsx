import React, { useState } from 'react';
import axios from 'axios';

function TicketValidator() {
    const [qrCode, setQrCode] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/validate', { qr_code: qrCode });
            setValidationMessage(response.data.message);
        } catch (error) {
            setValidationMessage('Validation failed: ' + (error.response?.data?.error || 'Unknown error'));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="QR Code (Base64)"
                    value={qrCode}
                    onChange={(e) => setQrCode(e.target.value)}
                    required
                />
                <button type="submit">Validate Ticket</button>
            </form>
            {validationMessage && <p>{validationMessage}</p>}
        </div>
    );
}

export default TicketValidator;
