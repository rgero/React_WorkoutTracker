import TestRenderer from 'react-test-renderer';

import WorkoutGroup from '../../../components/workout/WorkoutGroup';
import { TestWorkouts } from '../../testData';

jest.mock('../../../components/workout/WorkoutListItem', () => ({
    WorkoutListItem: (workout, index)=> {
        return (<div>{workout.workout.workoutDate}</div>);
    }
}));

describe("Render tests", ()=> {

    let testWorkouts = {
        "02": [TestWorkouts[1], TestWorkouts[3]]
    }

    test("Data descending, matches snapshot", ()=> {
        let element = new TestRenderer.create(
            <WorkoutGroup workoutList={testWorkouts} descending={true}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

    test("Data ascending, matches snapshot", ()=> {

        let element = new TestRenderer.create(
            <WorkoutGroup workoutList={testWorkouts} descending={false}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

})