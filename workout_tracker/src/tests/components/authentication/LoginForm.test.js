import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
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

    let mockUserData = {
        email: "gibgibgib@gib.com",
        password: "NotARealPasswordObvs"
    }

    beforeEach(()=> {
        render(<LoginForm onSubmit={mockSubmit} />)
    })

    test("Valid Submission", ()=> {
        act(()=> {
            const emailInput = screen.getByRole("textbox", {name: /email/i});
            const passwordInput = screen.getByLabelText(/password/i);

            user.click(emailInput);
            user.keyboard(mockUserData.email);
        
            user.click(passwordInput);
            user.keyboard(mockUserData.password);
        
            const button = screen.getByRole("button");

            user.click(button);
        })

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith( mockUserData )
    })

    test("Invalid Submission, no email", ()=> {
        act(()=> {
            const passwordInput = screen.getByLabelText(/password/i);

            user.click(passwordInput);
            user.keyboard(mockUserData.password);
        
            const button = screen.getByRole("button");

            user.click(button);
        })

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Missing e-mail");
        expect(errorField).toBeInTheDocument();
    })

    test("Invalid Submission - missing password", ()=> {
        act(()=> {
            const emailInput = screen.getByRole("textbox", {name: /email/i});

            user.click(emailInput);
            user.keyboard(mockUserData.email);
                
            const button = screen.getByRole("button");

            user.click(button);
        })

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Missing password");
        expect(errorField).toBeInTheDocument();
    })
})