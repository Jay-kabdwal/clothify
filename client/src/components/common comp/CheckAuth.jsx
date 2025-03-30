import { Navigate, useLocation } from "react-router-dom"


const CheckAuth = ({ isAutherised, user, children }) => {

    const location = useLocation()

    if (!isAutherised && !(location.pathname.includes("login") || location.pathname.includes("signup"))) {
        return <Navigate to="/auth/login" />
    }

    if (isAutherised && (location.pathname.includes("login") || location.pathname.includes("signup"))) {
        if (user?.role === "admin") {
            return <Navigate to="/admin/dashboard" />
        }
        else {
            return <Navigate to="/shop/home" />
        }

    }

    if (isAutherised && user?.role !== "admin" && location.pathname.includes("admin")) {
        return <Navigate to="/unauthpage" />
    }

    if (isAutherised && user?.role === "admin" && location.pathname.includes("shop")) {
        return <Navigate to="/admin/dashboard" />
    }

    return <>{children}</>

}

export default CheckAuth