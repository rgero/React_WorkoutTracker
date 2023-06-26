import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';

import {LoginForm} from '../../../components/authentication/LoginForm';

describe("LoginForm Rendering Tests", ()=> {
    test("No Data", ()=> {
        let element = new TestRenderer.create(
            <LoginForm onSubmit={jest.fn()} />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })
})

describe("LoginForm value tests", ()=> {
    let mockSubmit = jest.fn();
    let user;
    let mockUserData = {
        email: "gibgibgib@gib.com",
        password: "NotARealPasswordObvs"
    }

    beforeEach(()=> {
        user = userEvent.setup();
        render(<LoginForm onSubmit={mockSubmit} />)
    })

    test("Valid Submission", async ()=> {
        const emailInput = screen.getByRole("textbox", {name: /email/i});
        const passwordInput = screen.getByLabelText(/password/i);

        await user.click(emailInput);
        await user.keyboard(mockUserData.email);
    
        await user.click(passwordInput);
        await user.keyboard(mockUserData.password);
    
        const button = screen.getByRole("button");
        await user.click(button);

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith( mockUserData )
    })

    test("Invalid Submission, no email", async ()=> {
        const passwordInput = screen.getByLabelText(/password/i);

        await user.click(passwordInput);
        await user.keyboard(mockUserData.password);
        
        const button = screen.getByRole("button");
        await user.click(button);

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Missing e-mail");
        expect(errorField).toBeInTheDocument();
    })

    test("Invalid Submission - missing password", async ()=> {
        const emailInput = screen.getByRole("textbox", {name: /email/i});

        await user.click(emailInput);
        await user.keyboard(mockUserData.email);
                
        const button = screen.getByRole("button");
        await user.click(button);

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Missing password");
        expect(errorField).toBeInTheDocument();
    })
})