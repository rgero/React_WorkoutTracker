import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import moment from 'moment';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

import { WorkoutForm } from '../../../components/workout/WorkoutForm';
import { TestExercises, TestWorkouts } from '../../testData';

jest.mock('../../../components/exercise/ExerciseForm', () => ({
    ExerciseForm: ()=> {
        return (<div>Exercise Form Rendered Here</div>);
    }
}));

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))

describe("Workout Form Rendering", ()=> {

    test("No Data, matches snapshot", ()=> {
        let workoutInfo = {
            workoutDate: "2022-02-22"
        }
        const pageRender = new ShallowRenderer().render(
            <WorkoutForm workout={workoutInfo}/>
        );
        expect(pageRender).toMatchSnapshot();
    })

    test("Has Data, matches snapshot", ()=> {
        const pageRender = new ShallowRenderer().render(
            <WorkoutForm workout={TestWorkouts[0]}/>
        );
        expect(pageRender).toMatchSnapshot();
    })
})

// Error Handling
// Test fails for no workout date
// Test fails for no exercises
describe("Workout Form", ()=> {

    let workoutDate, workoutNotes, workoutSubmit;
    let user;

    let mockSubmit = jest.fn();

    let testWorkout = {
        exerciseList: TestExercises
    }

    beforeEach(()=> {
        user = userEvent.setup();
        render(<WorkoutForm workout={testWorkout} onSubmit={mockSubmit} />)

        workoutDate = screen.getByLabelText(/workoutdate/i);
        workoutNotes = screen.getByRole("textbox", {name: /workoutnotes/i});
        workoutSubmit = screen.getByRole("button", {name: /workoutsubmit/i});

    })

    test("Full form submission", async ()=> {
        await user.click(workoutDate);
        await userEvent.type(workoutDate, '02/22/2022');

        await user.click(workoutNotes);
        await user.keyboard("Today was a productive day");
        await user.click(workoutSubmit);

        let expectedResult = {
            "_id": null,
            workoutDate: "2022-02-22",
            notes: "Today was a productive day",
            exerciseList: TestExercises
        }

        screen.debug();
        
        expect(mockSubmit).toHaveBeenCalledWith(expectedResult);
    })

    test("Min form submission", async ()=> {
        await user.click(workoutDate);
        await user.keyboard("02222022");

        await user.click(workoutSubmit);

        let expectedResult = {
            "_id": null,
            workoutDate: "2022-02-01",
            notes: "",
            exerciseList: TestExercises
        }

        screen.debug();

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith(expectedResult);
    })

    test("Date automatically filled", async ()=> {
        await user.click(workoutSubmit);

        let expectedResult = {
            "_id": null,
            workoutDate: new moment().format('YYYY-MM-DD'),
            notes: "",
            exerciseList: TestExercises
        }

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith(expectedResult);
    })
})