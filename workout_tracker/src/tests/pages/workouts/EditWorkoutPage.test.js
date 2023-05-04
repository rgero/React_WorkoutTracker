import React from 'react';
import TestRenderer from 'react-test-renderer';
import reactRouterDom from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import {Context as WorkoutContext} from '../../../context/WorkoutContext';
import { EditWorkoutPage } from '../../../pages/workouts/EditWorkoutPage';
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
        updateWorkouts: jest.fn()
    }

    jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({ id: '1234' });

    let element;
    await act(async () => {
        element = new TestRenderer.create(
            <WorkoutContext.Provider value={testContextValues}>
                <EditWorkoutPage/>
            </WorkoutContext.Provider>
        );
    })
    
    expect(element.toJSON()).toMatchSnapshot();
})

test('Rendering a Second Workout', async ()=> {

    const testContextValues = {
        state: TestWorkouts,
        fetchWorkouts: jest.fn(),
        updateWorkouts: jest.fn()
    }

    jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({ id: '2222' });

    let element;
    await act(async () => {
        element = new TestRenderer.create(
            <WorkoutContext.Provider value={testContextValues}>
                <EditWorkoutPage/>
            </WorkoutContext.Provider>
        );
    })
    
    expect(element.toJSON()).toMatchSnapshot();
})