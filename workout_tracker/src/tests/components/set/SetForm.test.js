import TestRenderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';

import {SetForm} from '../../../components/set/SetForm';
import { TestSet } from '../../testData';

describe("SetForm Rendering Tests", () => {
    test('No data', ()=> {
        let element = new TestRenderer.create(
            <SetForm onSubmit={jest.fn()} />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })

    test('With Data', ()=> {
        let element = new TestRenderer.create(
            <SetForm
                set = {TestSet}
                onSubmit={jest.fn()} 
            />
        )
        expect(element.toJSON()).toMatchSnapshot();
    })
    
})