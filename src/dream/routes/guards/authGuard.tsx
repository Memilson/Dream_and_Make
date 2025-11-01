import { Navigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useAuth';

const authGuard = (Component: React.FC) => {
    return () => {
        const { isAuthenticated } = useAuth();

        return isAuthenticated ? <Component /> : <Navigate to="/login" />;
    };
};

export default authGuard;