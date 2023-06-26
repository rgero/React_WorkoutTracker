import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

import {Context as WorkoutContext} from '../../../context/WorkoutContext';
import {WorkoutListItem} from '../../../components/workout/WorkoutListItem';
import { TestWorkouts } from '../../testData';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))

describe("Workout List Item - Render tests", ()=> {
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

    test("Has Data, matches snapshot", ()=> {
        const pageRender = new ShallowRenderer().render(
            <WorkoutListItem workout={TestWorkouts[0]} index={1} />
        );
        expect(pageRender).toMatchSnapshot();
    })
})

describe("WorkoutListItem - Button Tests", ()=> {
    let user;
    beforeEach(()=> {
        let testContextValues = {
            deleteWorkout: jest.fn()
        }
        user = userEvent.setup();
        render(
            <WorkoutContext.Provider value={testContextValues}>
                <WorkoutListItem workout={TestWorkouts[0]} index={1} />
            </WorkoutContext.Provider>
        )
    })
    
    test("View Workout", async ()=> {
        let viewButton = screen.getByRole("button", {name: /view/i});
        await user.click(viewButton);
        expect(mockedNavigate).toHaveBeenCalledWith('/view/1234')
    })

    test("Edit Workout", async ()=> {
        let editButton = screen.getByRole("button", {name: /edit/i});
        await user.click(editButton);
        expect(mockedNavigate).toHaveBeenCalledWith('/edit/1234')
    })
})