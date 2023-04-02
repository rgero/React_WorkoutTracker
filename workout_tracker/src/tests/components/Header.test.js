import TestRenderer from 'react-test-renderer';
import Header from '../../components/Header'
import {Context as AuthContext} from '../../context/AuthContext';


describe("No User Logged In", ()=> {
    let element;
    beforeAll(()=> {
        const testValue = {
            state: {token: null},
            tryLocalSignin: jest.fn(),
            signOut: jest.fn()
        }
        element = new TestRenderer.create(
            <AuthContext.Provider value={testValue}>
                <Header />
            </AuthContext.Provider>
        );
    });

    test("Matches Snapshot", () => {  
        expect(element.toJSON()).toMatchSnapshot();
    });

    test("Correct button count", () => {
        let buttons = element.root.findAllByType("a");
        expect(buttons.length).toEqual(3);
    });
})

describe("User Logged In, with fake token", ()=> {
    let element;
    beforeAll(()=> {
        const testValue = {
            state: {token: "FakeTokenIsNeat"},
            tryLocalSignin: jest.fn(),
            signOut: jest.fn()
        }
        element = new TestRenderer.create(
            <AuthContext.Provider value={testValue}>
                <Header />
            </AuthContext.Provider>
        );
    });


    test("Matches Snapshot", () => {  
        expect(element.toJSON()).toMatchSnapshot()
    })

    test("Matches button count", ()=> {
        let buttons = element.root.findAllByType("a");
        expect(buttons.length).toEqual(4);
    })
})

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

