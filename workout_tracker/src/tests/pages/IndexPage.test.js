import React from 'react';
import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

import IndexPage from '../../pages/IndexPage';
import {Context as AuthContext} from '../../context/AuthContext';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
}));

jest.mock('../../pages/DashboardPage', () => ({
    DashboardPage: ()=> {
        return (<div>This is the Mocked Dashboard Page</div>);
    }
}));

describe("Index Page", ()=> {

    test('Renders Index Page and checks against snapshot', async ()=> {
        const testContextValues = {
            state: {},
            tryLocalSignin: jest.fn()
        }

        let element;
        await act(async () => {
            element = new TestRenderer.create(
                <AuthContext.Provider value={testContextValues}>
                    <IndexPage/>
                </AuthContext.Provider>
            );
        })
        expect(element.toJSON()).toMatchSnapshot();
    })

    test('User Logged in - Renders Dsahboard', async ()=> {
        const testContextValues = {
            state: { token: "dummyToken"},
            tryLocalSignin: jest.fn()
        }

        let element;
        await act(async () => {
            element = new TestRenderer.create(
                <AuthContext.Provider value={testContextValues}>
                    <IndexPage/>
                </AuthContext.Provider>
            );
        })
        expect(element.toJSON()).toMatchSnapshot();
    })

})

