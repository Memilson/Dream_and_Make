import React from 'react';
import { Link } from '../../shared/components/Link';
import './NavBar.css'; // Assuming you have some styles for the NavBar

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/todos">Todos</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;