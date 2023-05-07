import React from "react";
import { Navigate } from "react-router-dom";
import { ViewWorkoutsPage } from "../pages/workouts/ViewWorkoutsPage";
import {Context as AuthContext} from '../context/AuthContext';

export const DashboardPage = () => { 
    const {state, tryLocalSignin} = React.useContext(AuthContext);

    React.useEffect(()=> {
        tryLocalSignin();
    }, [])

    if (!state.token) {
        return <Navigate replace to="/login" />;
    } else {
        return (
            <>
                <ViewWorkoutsPage/>
            </>
        );
    }

};

export default DashboardPage;