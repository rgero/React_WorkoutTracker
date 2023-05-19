import React from 'react';
import TestRenderer from 'react-test-renderer';
import reactRouterDom from 'react-router-dom';
import { act } from 'react-dom/test-utils';


import {Context as WorkoutContext} from '../../../context/WorkoutContext';
import ViewWorkoutDetailsPage from '../../../pages/workouts/ViewWorkoutDetailPage';
import {TestWorkouts} from '../../testData';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
    useNavigate: jest.fn()
}));


test('Rendering a Workout', async ()=> {

    const testContextValues = {
        state: TestWorkouts,
        fetchWorkouts: jest.fn(),
        deleteWorkout: jest.fn()
    }

    jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({ id: '1234' });

    let element;
    await act(async () => {
        element = new TestRenderer.create(
            <WorkoutContext.Provider value={testContextValues}>
                <ViewWorkoutDetailsPage/>
            </WorkoutContext.Provider>
        );
    })
    
    expect(element.toJSON()).toMatchSnapshot();
})

test('Rendering a failure', async ()=> {

    const testContextValues = {
        state: TestWorkouts,
        fetchWorkouts: jest.fn(),
        deleteWorkout: jest.fn()
    }

    jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({ id: '123123123' });

    let element;
    await act(async () => {
        element = new TestRenderer.create(
            <WorkoutContext.Provider value={testContextValues}>
                <ViewWorkoutDetailsPage/>
            </WorkoutContext.Provider>
        );
    })
    
    expect(element.toJSON()).toMatchSnapshot();
})