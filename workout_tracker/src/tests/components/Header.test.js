import TestRenderer from 'react-test-renderer';
import Header from '../../components/Header'
import {Context as AuthContext} from '../../context/AuthContext';

test("No user logged in", () => {
    const testValue = {
        state: {token: null},
        tryLocalSignin: jest.fn(),
        signOut: jest.fn()
    }
    const element = new TestRenderer.create(
        <AuthContext.Provider value={testValue}>
            <Header />
        </AuthContext.Provider>
    );

    expect(element.toJSON()).toMatchSnapshot()
});

test("User logged in", () => {
    const testValue = {
        state: {token: "aisdnaisndasiudbnuf"},
        tryLocalSignin: jest.fn(),
        signOut: jest.fn()
    }
    const element = new TestRenderer.create(
        <AuthContext.Provider value={testValue}>
            <Header />
        </AuthContext.Provider>
    );

    expect(element.toJSON()).toMatchSnapshot()
});