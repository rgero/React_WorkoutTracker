import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';

import {ExerciseForm} from '../../../components/exercise/ExerciseForm';
import {TestExercise} from '../../testData';

describe("ExerciseForm Rendering Tests", () => {
    test('No data', ()=> {
        let element = new TestRenderer.create(
            <ExerciseForm onSubmit={jest.fn()} />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

    test('With Data', ()=> {
        let element = new TestRenderer.create(
            <ExerciseForm
                exercise = {TestExercise}
                onSubmit={jest.fn()} 
            />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })
})

describe("ExerciseForm Submissions", ()=> {

    let nameInput, muscleInput, notesInput;
    let exerciseSubmit;
    
    let user;

    let mockSubmit = jest.fn();

    let dummyExerciseWithSet = {
        "setList": [
            {
                "reps": 40,
                "weight": 100,
            }
        ]
    }

    beforeEach(()=> {
        user = userEvent.setup();
        render(<ExerciseForm exercise={dummyExerciseWithSet} onSubmit={mockSubmit} />)

        act(()=> {
            nameInput = screen.getByRole("textbox", {name: /name/i});
            muscleInput = screen.getByRole("textbox", {name: /musclegroup/i});
            notesInput = screen.getByRole("textbox", {name: /exerciseNotes/i});

            exerciseSubmit = screen.getByRole("button", {name: /exercisesubmit/i});
        })

    })

    test("Minimum Valid Submit", async ()=> {
        await user.click(nameInput);
        await user.keyboard(TestExercise.name);
        await user.click(exerciseSubmit);

        let expectedResult = {
            name: TestExercise.name,
            notes: "",
            muscleGroup: "",
            setList: dummyExerciseWithSet.setList
        }

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith(expectedResult)
    })

    test("Adding a note, valid submit", async ()=> {

        await user.click(nameInput);
        await user.keyboard(TestExercise.name);
        await user.click(notesInput);
        await user.keyboard(TestExercise.notes);
        await user.click(exerciseSubmit);

        let expectedResult = {
            name: TestExercise.name,
            notes: TestExercise.notes,
            muscleGroup: "",
            setList: dummyExerciseWithSet.setList
        }

        expect(mockSubmit).toHaveBeenCalledWith(expectedResult)
    })

    test("Adding a muscle group, valid submit", async ()=> {
        await user.click(nameInput);
        await user.keyboard(TestExercise.name);

        await user.click(muscleInput);
        await user.keyboard(TestExercise.muscleGroup);
        
        await user.click(exerciseSubmit);

        let expectedResult = {
            name: TestExercise.name,
            notes: "",
            muscleGroup: TestExercise.muscleGroup,
            setList: dummyExerciseWithSet.setList
        }

        expect(mockSubmit).toHaveBeenCalledWith(expectedResult)
    })

    test("Full Form, valid submit", async ()=> {
        await user.click(nameInput);
        await user.keyboard(TestExercise.name);

        await user.click(notesInput);
        await user.keyboard(TestExercise.notes);

        await user.click(muscleInput);
        await user.keyboard(TestExercise.muscleGroup);
        
        await user.click(exerciseSubmit);

        let expectedResult = {
            name: TestExercise.name,
            notes: TestExercise.notes,
            muscleGroup: TestExercise.muscleGroup,
            setList: dummyExerciseWithSet.setList
        }

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith(expectedResult)
    })
})

describe("Form Invalid Submissions", ()=> {

    let mockSubmit = jest.fn();
    let dummyExerciseWithSet = {
        setList: TestExercise.setList
    }

    let user = userEvent.setup();
    

    test("Missing Name", async ()=> {
        render(<ExerciseForm exercise={dummyExerciseWithSet} onSubmit={mockSubmit} />)

        let exerciseSubmit = screen.getByRole("button", {name: /exercisesubmit/i});
        await user.click(exerciseSubmit);

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Missing exercise name");
        expect(errorField).toBeInTheDocument();
    })

    test("Missing set list", async ()=> {

        render(<ExerciseForm onSubmit={mockSubmit} />)

        let nameInput = screen.getByRole("textbox", {name: /name/i});
        await user.click(nameInput);
        await user.keyboard(TestExercise.name);
            
        let exerciseSubmit = screen.getByRole("button", {name: /exercisesubmit/i});
        await user.click(exerciseSubmit);

        expect(mockSubmit).not.toHaveBeenCalled();

        const errorField = screen.getByText("Error: Missing set list");
        expect(errorField).toBeInTheDocument();

    })

})