import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

const Link: React.FC<LinkProps> = ({ to, children, className }) => {
    return (
        <RouterLink to={to} className={className}>
            {children}
        </RouterLink>
    );
};

export default Link;