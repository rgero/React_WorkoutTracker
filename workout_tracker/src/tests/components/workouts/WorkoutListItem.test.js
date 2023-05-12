import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'
import {WorkoutListItem} from '../../../components/workout/WorkoutListItem';

import { TestWorkouts } from '../../testData';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
}));

let realUseContext;
let useContextMock;

beforeEach(()=> {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();

    useContextMock.mockReturnValue({
        deleteWorkout: jest.fn()
    });
})

afterEach(()=> {
    React.useContext = realUseContext;
})

describe("Workout List Item - Render tests", ()=> {
    test("Has Data, matches snapshot", ()=> {
        const pageRender = new ShallowRenderer().render(
            <WorkoutListItem workout={TestWorkouts[0]} index={1} />
        );
        expect(pageRender).toMatchSnapshot();
    })
})