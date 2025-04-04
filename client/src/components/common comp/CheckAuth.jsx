import { Navigate, useLocation } from "react-router-dom"

const CheckAuth = ({ isAuthenticated, user, children }) => { // Fixed prop name
    const location = useLocation();

    // Not authenticated, redirect to login
    
    if (!isAuthenticated &&
        !location.pathname.includes("/login") &&
        !location.pathname.includes("/signup")) {
        return <Navigate to="/auth/login" replace />;
    }

    // Authenticated but on auth pages, redirect based on role
    if (isAuthenticated &&
        (location.pathname.includes("/login") || location.pathname.includes("/signup"))) {
        return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/shop/home"} replace />;
    }

    // Non-admin trying to access admin routes
    if (isAuthenticated &&
        user?.role !== "admin" &&
        location.pathname.includes("/admin")) {
        return <Navigate to="/unauthpage" replace />;
    }

    // Admin trying to access shop routes
    if (isAuthenticated &&
        user?.role === "admin" &&
        location.pathname.includes("/shop")) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    return children;
}

export default CheckAuth;