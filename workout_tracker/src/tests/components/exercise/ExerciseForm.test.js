import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import {ExerciseForm} from '../../../components/exercise/ExerciseForm';
import {TestExercise} from '../../testData';

describe("ExerciseForm Rendering Tests", () => {
    test('No data', ()=> {
        let element = new TestRenderer.create(
            <ExerciseForm onSubmit={jest.fn()} />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

    test('With Data', ()=> {
        let element = new TestRenderer.create(
            <ExerciseForm
                exercise = {TestExercise}
                onSubmit={jest.fn()} 
            />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })
})