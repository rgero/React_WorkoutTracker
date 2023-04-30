import ShallowRenderer from 'react-test-renderer/shallow'
import React from 'react';
import { AddWorkoutPage } from '../../../pages/workouts/AddWorkoutPage';

let realUseContext;
let useContextMock;

beforeEach(()=> {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
})

afterEach(()=> {
    React.useContext = realUseContext;
})

test('Renders AddWorkoutPage Page and checks against snapshot', ()=> {
    useContextMock.mockReturnValue({
        state: {},
        createWorkout: jest.fn()
    });
    
    const pageRender = new ShallowRenderer().render(
        <AddWorkoutPage />
    );

    expect(pageRender).toMatchSnapshot();
})