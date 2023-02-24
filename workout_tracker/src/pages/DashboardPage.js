import { useEffect, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { ViewWorkoutsPage } from "../components/workout/ViewWorkoutsPage";
import {Context as AuthContext} from '../context/AuthContext';

const DashboardPage = () => { 
    const {state, tryLocalSignin} = useContext(AuthContext);

    useEffect(()=> {
        tryLocalSignin();
    }, [tryLocalSignin])


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