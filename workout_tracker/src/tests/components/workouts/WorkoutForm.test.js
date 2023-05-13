import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'

import { WorkoutForm } from '../../../components/workout/WorkoutForm';

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
        const pageRender = new ShallowRenderer().render(
            <WorkoutForm />
        );
        expect(pageRender).toMatchSnapshot();
    })


})