import React from 'react';
import TestRenderer from 'react-test-renderer';
import reactRouterDom from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import {Context as AuthContext} from '../../context/AuthContext';
import DashboardPage from '../../pages/DashboardPage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
}));

jest.mock('../../pages/workouts/ViewWorkoutsPage', () => ({
    ViewWorkoutsPage: ()=> {
        return (<div>ViewWorkoutsPage Rendered Here</div>);
    }
}));

describe("Dashboard Tests", ()=> {

    test("Token Presented - matches mocked View Workout Page", async ()=> {

        const testContextValues = {
            state: { token: "asinaidnsdin"},
            tryLocalSignin: jest.fn()
        }
   
        let element;
        await act(async () => {
            element = new TestRenderer.create(
                <AuthContext.Provider value={testContextValues}>
                        <DashboardPage/>
                </AuthContext.Provider>
            );
        })

        expect(element.toJSON()).toMatchSnapshot();
    })
})