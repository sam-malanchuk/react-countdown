import React from 'react';
import { Link } from 'react-router-dom';
  
function Menu() {
    return (
        <div>
            <p>Welcome to the React Click Countdown</p>
            <Link to="/counter">
                <button>Start</button>
            </Link>
        </div>
    )
}

export default Menu;