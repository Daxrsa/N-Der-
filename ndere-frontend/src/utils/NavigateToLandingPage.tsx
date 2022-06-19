import { Navigate } from "react-router-dom";

export default function NavigateToLandingPage() {
    return <Navigate to={{pathname: '/'}} />
}