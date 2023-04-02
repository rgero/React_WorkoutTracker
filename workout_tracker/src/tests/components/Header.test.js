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

test("No user logged in - button count", () => {
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

    let buttons = element.root.findAllByType("a");
    expect(buttons.length).toEqual(3);
});

test('Branding button works', ()=> {
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

    let buttons = element.root.findAllByType("a");
    let headerButton = buttons[0].props;
    let expectedHeader = {
        href: '/',
        children: 'Workout Tracker',
        className: 'navbar-brand'
    }
    expect(headerButton).toEqual(expectedHeader);
})


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