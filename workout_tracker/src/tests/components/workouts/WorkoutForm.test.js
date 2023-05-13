import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { WorkoutForm } from '../../../components/workout/WorkoutForm';
import { TestExercises, TestWorkouts } from '../../testData';

import DateFormatter from '../../../helpers/DateFormatter';

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

    let workoutDate, workoutNotes;
    let workoutSubmit;

    let mockSubmit = jest.fn();

    let testWorkout = {
        exerciseList: TestExercises
    }

    beforeEach(()=> {

        render(<WorkoutForm workout={testWorkout} onSubmit={mockSubmit} />)

        act(()=> {
            workoutDate = screen.getByLabelText(/workoutdate/i);
            workoutNotes = screen.getByRole("textbox", {name: /workoutnotes/i});

            workoutSubmit = screen.getByRole("button", {name: /workoutsubmit/i});
        })

    })

    test("Full form submission", ()=> {
        act(()=> {
            user.click(workoutDate);
            user.keyboard("2022-02-22");

            user.click(workoutNotes);
            user.keyboard("Today was a productive day");

            user.click(workoutSubmit);
        })

        let expectedResult = {
            "_id": null,
            workoutDate: "2022-02-22",
            notes: "Today was a productive day",
            exerciseList: TestExercises
        }

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith(expectedResult);
    })

    test("Min form submission", ()=> {
        act(()=> {
            user.click(workoutDate);
            user.keyboard("2022-02-01");

            user.click(workoutSubmit);
        })

        let expectedResult = {
            "_id": null,
            workoutDate: "2022-02-01",
            notes: "",
            exerciseList: TestExercises
        }

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith(expectedResult);
    })

    test("Date automatically filled", ()=> {
        act(()=> {
            user.click(workoutSubmit);
        })

        let expectedResult = {
            "_id": null,
            workoutDate: DateFormatter(new Date()),
            notes: "",
            exerciseList: TestExercises
        }

        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledWith(expectedResult);
    })
})