import TestRenderer from 'react-test-renderer';
import {ExerciseList} from '../../../components/exercise/ExerciseList';

import { TestExercises } from '../../testData';

describe("Render tests", ()=> {

    let mockDelete = jest.fn();

    test("No Data, matches snapshot", ()=> {
        let element = new TestRenderer.create(
            <ExerciseList onDelete={mockDelete}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

    test("Has Data, matches snapshot", ()=> {

        let element = new TestRenderer.create(
            <ExerciseList exerciseList={TestExercises} onDelete={mockDelete}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

})