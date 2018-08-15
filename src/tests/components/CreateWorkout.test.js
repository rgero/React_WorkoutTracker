import React from 'react';
import {shallow} from 'enzyme';
import {CreateWorkout} from '../../components/CreateWorkout';

let onSubmit, wrapper, history;

beforeEach(()=>{
    onSubmit = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(
        <CreateWorkout 
            onSubmit={onSubmit}
            history={history}
        />
    )

})

test("Create Workout Snapshot Test", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('OnSubmit testing', ()=> {
    //Right now this test just returns back to the previous page.
    const testObj = wrapper.find('button');
    expect(testObj.length).toBe(1);
    testObj.simulate("click")
    expect(history.push).toHaveBeenLastCalledWith('/');
})