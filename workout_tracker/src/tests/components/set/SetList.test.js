import TestRenderer from 'react-test-renderer';
import {SetList} from '../../../components/set/SetList';

describe("Render tests", ()=> {

    test("No Data, matches snapshot", ()=> {
        let element = new TestRenderer.create(
            <SetList />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

    test("Has Data, matches snapshot", ()=> {

        let setList = [
            {
                reps: "20",
                weight: "225"
            },
            {
                reps: "100",
                weight: "315"
            }
        ]

        let element = new TestRenderer.create(
            <SetList setList={setList}/>
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

})