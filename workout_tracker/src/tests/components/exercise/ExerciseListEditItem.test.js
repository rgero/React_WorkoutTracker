import TestRenderer from 'react-test-renderer';
import {ExerciseListItem} from '../../../components/exercise/ExerciseListEditItem';

import { TestExercise } from '../../testData';

describe("Render tests", ()=> {

    let mockDelete = jest.fn();

    test("No Data, matches snapshot", ()=> {
        let element = new TestRenderer.create(
            <ExerciseListItem onDelete={mockDelete}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

    test("Has Data, matches snapshot", ()=> {

        let element = new TestRenderer.create(
            <ExerciseListItem exercise={TestExercise} onDelete={mockDelete}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

})