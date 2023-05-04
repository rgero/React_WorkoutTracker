import ShallowRenderer from 'react-test-renderer/shallow'
import React from 'react';
import { ViewWorkoutsPage } from '../../../pages/workouts/ViewWorkoutsPage';

let realUseContext;
let useContextMock;

beforeEach(()=> {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
})

afterEach(()=> {
    React.useContext = realUseContext;
})

test('Renders ViewWorkoutsPage Page and checks against snapshot', ()=> {
    useContextMock.mockReturnValue({
        state: {},
        clearWorkouts: jest.fn(),
        fetchWorkouts: jest.fn()
    });
    
    const pageRender = new ShallowRenderer().render(
        <ViewWorkoutsPage />
    );

    expect(pageRender).toMatchSnapshot();
})