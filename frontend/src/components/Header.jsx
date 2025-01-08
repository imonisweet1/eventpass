import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>EasyPass</h1>
            <nav>
	    	<Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
		<Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
		<Link to="/events" style={{ margin: '0 10px' }}>Events</Link>
		<Link to="/purchase" style={{ margin: '0 10px' }}>Purchase Ticket</Link>
		<Link to="/validate" style={{ margin: '0 10px' }}>Validate Ticket</Link>
            </nav>
        </header>
    );
}

export default Header;
