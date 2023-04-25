import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

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