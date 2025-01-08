import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import EventList from './components/EventList';
import TicketPurchase from './components/TicketPurchase';
import TicketValidator from './components/TicketValidator';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/events" element={<EventList />} />
                <Route path="/purchase" element={<TicketPurchase />} />
                <Route path="/validate" element={<TicketValidator />} />
            </Routes>
        </Router>
    );
}

export default App;
