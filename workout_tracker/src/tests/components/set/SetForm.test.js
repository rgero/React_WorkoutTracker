import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

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
    test("Valid Submission - Both values", ()=> {
        let submit = jest.fn();
        let testSet = TestSet;

        render(<SetForm onSubmit={submit} />)

        act(()=> {
            const repInput = screen.getByRole("textbox", {name: /reps/i});
            const weightInput = screen.getByRole("textbox", {name: /weight/i});

            user.click(repInput);
            user.keyboard(testSet.reps);
        
            user.click(weightInput);
            user.keyboard(testSet.weight);
        
            const button = screen.getByRole("button");

            user.click(button);
        })
        
        expect(submit).toHaveBeenCalled();
        expect(submit).toHaveBeenCalledWith( testSet )
    })

    test("Valid Submission - Just Reps", ()=> {
        let submit = jest.fn();
        let testSet = {
            reps: "20",
            weight: ""
        }

        render(<SetForm onSubmit={submit} />)

        act(()=> {
            const repInput = screen.getByRole("textbox", {name: /reps/i});

            user.click(repInput);
            user.keyboard(testSet.reps);
        
            const button = screen.getByRole("button");

            user.click(button);
        })
        
        expect(submit).toHaveBeenCalled();
        expect(submit).toHaveBeenCalledWith( testSet )
    })

    test("Invalid Submission - No Reps", () => {
        let submit = jest.fn();
        let testSet = TestSet;

        render(<SetForm onSubmit={submit} />)

        act(()=> {
            const weightInput = screen.getByRole("textbox", {name: /weight/i});
      
            user.click(weightInput);
            user.keyboard(testSet.weight);
        
            const button = screen.getByRole("button");

            user.click(button);
        })
        
        expect(submit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Missing Reps");
        expect(errorField).toBeInTheDocument();
    })
})