import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {Context as AuthContext} from '../context/AuthContext';


const ProtectedRoute = ({children}) => {
    const {state, tryLocalSignin} = React.useContext(AuthContext);
    const [isLoaded, setLoaded] = React.useState(false)

    React.useEffect(()=> {
        const processUser = async () => {
            await tryLocalSignin();
            setLoaded(true);
        }
        processUser();
    }, [])

    if (isLoaded)
    {
        if (!state.token) {
            return <Navigate replace to="/login" />;
        } else {
            return children ? children : <Outlet />;
        }
    } else {
        return (null);
    }

};

export default ProtectedRoute;