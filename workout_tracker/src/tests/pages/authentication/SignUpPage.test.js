import React from 'react';
import TestRenderer from 'react-test-renderer';
import reactRouterDom, { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import {Context as AuthContext} from '../../../context/AuthContext';
import { SignUpPage } from '../../../../src/pages/SignUpPage';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))

describe("Sign Up Page Tests", ()=> {
    test('Rendering the blank page', async ()=> {

        const testContextValues = {
            state: {},
            signUp: jest.fn(),
            clearErrorMessage: jest.fn()
        }
    
        let element;
        await act(async () => {
            element = new TestRenderer.create(
                <AuthContext.Provider value={testContextValues}>
                    <SignUpPage/>
                </AuthContext.Provider>
            );
        })
        
        expect(element.toJSON()).toMatchSnapshot();
    })
    
    test("Token Presented, redirect detected", async ()=> {
        const testContextValues = {
            state: { token: "asinaidnsdin"},
            signUp: jest.fn(),
            clearErrorMessage: jest.fn()
        }
        
        let element;
        await act(async () => {
            element = new TestRenderer.create(
                <BrowserRouter>
                    <AuthContext.Provider value={testContextValues}>
                        <SignUpPage/>
                    </AuthContext.Provider>
                </BrowserRouter>
            );
        })
        
        expect(mockedNavigate).toHaveBeenCalledWith('/dashboard');
    })
})



