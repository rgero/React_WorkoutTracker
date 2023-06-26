import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

import {SetForm} from '../../../components/set/SetForm';
import { TestSet } from '../../testData';

describe("SetForm Rendering Tests", () => {
    test('No data', ()=> {
        let element = new TestRenderer.create(
            <SetForm onSubmit={jest.fn()} />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

    test('With Data', ()=> {
        let element = new TestRenderer.create(
            <SetForm
                set = {TestSet}
                onSubmit={jest.fn()} 
            />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })
})

describe("SetForm Submissions", ()=> {
    let user;
    let submit;
    beforeEach(()=> {
        user = userEvent.setup();
        submit = jest.fn();

        render(<SetForm onSubmit={submit} />)
    })

    test("Valid Submission - Both values", async ()=> {
        let testSet = TestSet;
        const repInput = screen.getByRole("textbox", {name: /reps/i});
        const weightInput = screen.getByRole("textbox", {name: /weight/i});

        await user.click(repInput);
        await user.keyboard(testSet.reps);
    
        await user.click(weightInput);
        await user.keyboard(testSet.weight);
    
        const button = screen.getByRole("button");
        await user.click(button);
        

        expect(submit).toHaveBeenCalled();
        expect(submit).toHaveBeenCalledWith( testSet )
    })

    test("Valid Submission - Just Reps", async ()=> {
        let testSet = {
            reps: "20",
            weight: ""
        }

        const repInput = screen.getByRole("textbox", {name: /reps/i});

        await user.click(repInput);
        await user.keyboard(testSet.reps);
    
        const button = screen.getByRole("button");
        await user.click(button);
        
        expect(submit).toHaveBeenCalled();
        expect(submit).toHaveBeenCalledWith( testSet )
    })

    test("Invalid Submission - No Reps", async () => {
        let testSet = TestSet;

        const weightInput = screen.getByRole("textbox", {name: /weight/i});
      
        await user.click(weightInput);
        await user.keyboard(testSet.weight);

        const button = screen.getByRole("button");
        await user.click(button);

        expect(submit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Missing Reps");
        expect(errorField).toBeInTheDocument();
    })
})