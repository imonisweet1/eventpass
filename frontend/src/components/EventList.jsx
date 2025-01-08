import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/events');
                setEvents(response.data);
            } catch (error) {
                alert('Failed to fetch events');
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Available Events</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>Date: {event.date}</p>
                        <p>Price: ${event.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;
