import React from 'react';
import { Link } from 'react-router-dom';
  
function Menu() {
    return (
        <div>
            <p>Welcome to the</p>
            <h2>React Click Countdown</h2>
            <Link to="/counter">
                <button class="menu-btn">Start</button>
            </Link>
        </div>
    )
}

export default Menu;