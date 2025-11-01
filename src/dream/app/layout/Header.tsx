import React from 'react';
import { Link } from '../../shared/components/Link';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">MyApp</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;