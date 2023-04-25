import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import {SignUpForm} from '../../../components/authentication/SignUpForm';

describe("SignUpForm Rendering Tests", ()=> {
    test("No Data", ()=> {
        let element = new TestRenderer.create(
            <SignUpForm onSubmit={jest.fn()} />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })
})

describe("SignUpForm value tests", ()=> {
    let mockSubmit = jest.fn();

    let mockUserData = {
        email: "gibgibgib@gib.com",
        password: "NotARealPasswordObvs"
    }

    beforeEach(()=> {
        render(<SignUpForm onSubmit={mockSubmit} />)
    })

    test("Valid Submission", ()=> {
        act(()=> {
            const emailInput = screen.getByRole("textbox", {name: /email/i});
            const passwordInput = screen.getByLabelText(/password/i);
            const secondPassword = screen.getByLabelText(/reentry/i);

            user.click(emailInput);
            user.keyboard(mockUserData.email);
        
            user.click(passwordInput);
            user.keyboard(mockUserData.password);

            user.click(secondPassword);
            user.keyboard(mockUserData.password);
        
            const button = screen.getByRole("button");

            user.click(button);
        })

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith( mockUserData )
    })

    test("Missing email", ()=> {
        act(()=> {
            const passwordInput = screen.getByLabelText(/password/i);
            const secondPassword = screen.getByLabelText(/reentry/i);
        
            user.click(passwordInput);
            user.keyboard(mockUserData.password);

            user.click(secondPassword);
            user.keyboard(mockUserData.password);
        
            const button = screen.getByRole("button");

            user.click(button);
        })

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Please fill out the full form.");
        expect(errorField).toBeInTheDocument();
    })

    test("Missing first password", ()=> {
        act(()=> {
            const emailInput = screen.getByRole("textbox", {name: /email/i});
            const secondPassword = screen.getByLabelText(/reentry/i);

            user.click(emailInput);
            user.keyboard();

            user.click(secondPassword);
            user.keyboard(mockUserData.password);
        
            const button = screen.getByRole("button");

            user.click(button);
        })

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Please fill out the full form.");
        expect(errorField).toBeInTheDocument();
    })

    test("Missing second password", ()=> {
        act(()=> {
            const emailInput = screen.getByRole("textbox", {name: /email/i});
            const passwordInput = screen.getByLabelText(/password/i);

            user.click(emailInput);
            user.keyboard();
        
            user.click(passwordInput);
            user.keyboard(mockUserData.password);
        
            const button = screen.getByRole("button");

            user.click(button);
        })

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Please fill out the full form.");
        expect(errorField).toBeInTheDocument();
    })

    test("Passwords won't match", ()=> {
        act(()=> {
            const emailInput = screen.getByRole("textbox", {name: /email/i});
            const passwordInput = screen.getByLabelText(/password/i);
            const secondPassword = screen.getByLabelText(/reentry/i);

            user.click(emailInput);
            user.keyboard(mockUserData.email);
        
            user.click(passwordInput);
            user.keyboard(mockUserData.password);

            user.click(secondPassword);
            user.keyboard("Not the same password");
        
            const button = screen.getByRole("button");
            
            user.click(button);
        })

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Passwords do not match.");
        expect(errorField).toBeInTheDocument();
    })
})