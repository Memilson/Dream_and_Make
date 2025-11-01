import React from 'react';
import { Link } from '../../../shared/components/Link';
import './styles.css'; // Assuming you have some styles for the home page

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Our SPA</h1>
            <p>This is the landing page of our application.</p>
            <Link to="/about">Learn more about us</Link>
        </div>
    );
};

export default Home;