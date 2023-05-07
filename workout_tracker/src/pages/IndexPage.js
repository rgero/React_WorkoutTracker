import React from "react";

import Container from 'react-bootstrap/Container';

import {DashboardPage} from './DashboardPage';
import {Context as AuthContext} from '../context/AuthContext';

const IndexPage = () => { 
    const {state, tryLocalSignin} = React.useContext(AuthContext);

    React.useEffect(()=> {
        tryLocalSignin();
    }, [])

    if (!state.token) {
        return (
            <Container>
                Welcome to the Workout Tracker. The goal of this app is to help you track your workouts and help you generate some cool stats.
            </Container>
        );
    } else {
        return (<DashboardPage/>);
    }
};

export default IndexPage;