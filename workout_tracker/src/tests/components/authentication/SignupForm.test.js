import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
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
    let user;
    let mockUserData = {
        email: "gibgibgib@gib.com",
        displayName: "Gib Gib",
        password: "NotARealPasswordObvs"
    }

    beforeEach(()=> {
        user = userEvent.setup();
        render(<SignUpForm onSubmit={mockSubmit} />)
    })

    test("Valid Submission", async ()=> {
        const emailInput = screen.getByRole("textbox", {name: /email/i});
        const displayNameInput = screen.getByRole("textbox", {name: /displayname/i});
        const passwordInput = screen.getByLabelText(/password/i);
        const secondPassword = screen.getByLabelText(/reentry/i);

        await user.click(emailInput);
        await user.keyboard(mockUserData.email);

        await user.click(displayNameInput);
        await user.keyboard(mockUserData.displayName);
    
        await user.click(passwordInput);
        await user.keyboard(mockUserData.password);

        await user.click(secondPassword);
        await user.keyboard(mockUserData.password);
    
        const button = screen.getByRole("button");

        await user.click(button);

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith( mockUserData )
    })

    test("Missing email", async ()=> {
        const displayNameInput = screen.getByRole("textbox", {name: /displayname/i});
        const passwordInput = screen.getByLabelText(/password/i);
        const secondPassword = screen.getByLabelText(/reentry/i);
    
        await user.click(displayNameInput);
        await user.keyboard(mockUserData.displayName);

        await user.click(passwordInput);
        await user.keyboard(mockUserData.password);

        await user.click(secondPassword);
        await user.keyboard(mockUserData.password);
    
        const button = screen.getByRole("button");

        await user.click(button);

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Please fill out the full form.");
        expect(errorField).toBeInTheDocument();
    })

    test("Missing first password", async ()=> {
        const emailInput = screen.getByRole("textbox", {name: /email/i});
        const displayNameInput = screen.getByRole("textbox", {name: /displayname/i});
        const secondPassword = screen.getByLabelText(/reentry/i);

        await user.click(emailInput);
        await user.keyboard(mockUserData.email);

        await user.click(displayNameInput);
        await user.keyboard(mockUserData.displayName);

        await user.click(secondPassword);
        await user.keyboard(mockUserData.password);
    
        const button = screen.getByRole("button");

        await user.click(button);

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Please fill out the full form.");
        expect(errorField).toBeInTheDocument();
    })

    test("Missing second password", async ()=> {

        const emailInput = screen.getByRole("textbox", {name: /email/i});
        const displayNameInput = screen.getByRole("textbox", {name: /displayname/i});
        const passwordInput = screen.getByLabelText(/password/i);

        await user.click(emailInput);
        await user.keyboard(mockUserData.email);

        await user.click(displayNameInput);
        await user.keyboard(mockUserData.displayName);
    
        await user.click(passwordInput);
        await user.keyboard(mockUserData.password);
    
        const button = screen.getByRole("button");

        await user.click(button);

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Please fill out the full form.");
        expect(errorField).toBeInTheDocument();
    })

    test("Missing display name", async ()=> {

        const emailInput = screen.getByRole("textbox", {name: /email/i});
        const passwordInput = screen.getByLabelText(/password/i);
        const secondPassword = screen.getByLabelText(/reentry/i);

        await user.click(emailInput);
        await user.keyboard(mockUserData.email);
    
        await user.click(passwordInput);
        await user.keyboard(mockUserData.password);

        await user.click(secondPassword);
        await user.keyboard(mockUserData.password);
    
        const button = screen.getByRole("button");

        await user.click(button);

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Please fill out the full form.");
        expect(errorField).toBeInTheDocument();
    })

    test("Passwords won't match", async ()=> {

        const emailInput = screen.getByRole("textbox", {name: /email/i});
        const displayNameInput = screen.getByRole("textbox", {name: /displayname/i});
        const passwordInput = screen.getByLabelText(/password/i);
        const secondPassword = screen.getByLabelText(/reentry/i);

        await user.click(emailInput);
        await user.keyboard(mockUserData.email);

        await user.click(displayNameInput);
        await user.keyboard(mockUserData.displayName);
    
        await user.click(passwordInput);
        await user.keyboard(mockUserData.password);

        let secondaryPassword = "Not the same password";
        await user.click(secondPassword);
        await user.keyboard(secondaryPassword);
    
        const button = screen.getByRole("button");
        
        await user.click(button);


        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Passwords do not match.");
        expect(errorField).toBeInTheDocument();
    })
})