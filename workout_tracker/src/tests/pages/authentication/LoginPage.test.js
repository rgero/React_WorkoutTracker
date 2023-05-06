import React from 'react';
import TestRenderer from 'react-test-renderer';
import reactRouterDom from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import {Context as AuthContext} from '../../../context/AuthContext';
import { LoginPage } from '../../../../src/pages/LoginPage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
}));

test('Rendering the Login Page', async ()=> {

    const testContextValues = {
        state: {},
        signIn: jest.fn(),
        clearErrorMessage: jest.fn(),
        tryLocalSignin: jest.fn()
    }

    let element;
    await act(async () => {
        element = new TestRenderer.create(
            <AuthContext.Provider value={testContextValues}>
                <LoginPage/>
            </AuthContext.Provider>
        );
    })
    
    expect(element.toJSON()).toMatchSnapshot();
})

test("Login Token Presented, redirect detected", async ()=> {
    const testContextValues = {
        state: { token: "asinaidnsdin"},
        signIn: jest.fn(),
        clearErrorMessage: jest.fn(),
        tryLocalSignin: jest.fn()
    }

    let mockNavigate = jest.spyOn(reactRouterDom, "Navigate").mockImplementation();

    let element;
    await act(async () => {
        element = new TestRenderer.create(
            <AuthContext.Provider value={testContextValues}>
                <LoginPage/>
            </AuthContext.Provider>
        );
    })
    
    expect(mockNavigate.mock.calls).toEqual([[{"replace": true, "to": "/dashboard"}, {}]]);
})