import TestRenderer from 'react-test-renderer';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { ViewWorkoutsPage } from '../../../pages/workouts/ViewWorkoutsPage';
import {Context as WorkoutContext} from '../../../context/WorkoutContext';

import { TestWorkouts } from '../../testData';

jest.mock('../../../components/workout/WorkoutList', () => ({
    WorkoutList: (workoutList, descendingOrder)=> {
        return (<div>{JSON.stringify(workoutList)}</div>);
    }
}));

test('No Data - Renders ViewWorkoutsPage Page and checks against snapshot', async ()=> {
    const testContextValues = {
        state: {},
        clearWorkouts: jest.fn(),
        fetchWorkouts: jest.fn()
    };
    
    let pageRender;
    await act(async () => {
        pageRender = new TestRenderer.create(
            <WorkoutContext.Provider value={testContextValues}>
                <ViewWorkoutsPage />
            </WorkoutContext.Provider>
        );
    })

    expect(pageRender).toMatchSnapshot();
})

test('Data Provided - Renders ViewWorkoutsPage Page and checks against snapshot', async ()=> {
    const testContextValues = {
        state: {TestWorkouts},
        clearWorkouts: jest.fn(),
        fetchWorkouts: jest.fn()
    };
    
    let pageRender;
    await act(async () => {
        pageRender = new TestRenderer.create(
            <WorkoutContext.Provider value={testContextValues}>
                <ViewWorkoutsPage />
            </WorkoutContext.Provider>
        );
    })

    expect(pageRender).toMatchSnapshot();
})