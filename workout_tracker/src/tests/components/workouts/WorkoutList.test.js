import TestRenderer from 'react-test-renderer';
import {WorkoutList} from '../../../components/workout/WorkoutList';

import { TestWorkouts } from '../../testData';

jest.mock('../../../components/workout/WorkoutGroup', ()=> (props) => {
        let workoutList = JSON.stringify(props.workoutList);
        return (
            <div>
                {props.descendingOrder} : {workoutList}
            </div>
        );
    
});

describe("Render tests", ()=> {

    let mockDelete = jest.fn();

    test("No Data, matches snapshot", ()=> {
        let element = new TestRenderer.create(
            <WorkoutList onDelete={mockDelete}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

    test("Has Data - Descending Order, matches snapshot", ()=> {

        let element = new TestRenderer.create(
            <WorkoutList workoutList={TestWorkouts}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

        test("Has Data - Ascending Order, matches snapshot", ()=> {

        let element = new TestRenderer.create(
            <WorkoutList workoutList={TestWorkouts} descendingOrder={false}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

})