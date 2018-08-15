import React from 'react';
import {shallow} from 'enzyme';
import {CreateCardio} from '../../components/CreateCardio';

let onSubmit, onTextChange, onTimeChange;
let handleValueChange, wrapper, history;

beforeEach(()=>{
    onSubmit = jest.fn();
    onTextChange = jest.fn();
    onTimeChange = jest.fn();
    handleValueChange  = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(  <CreateCardio 
                            onSubmit={onSubmit} 
                            onTextChange={onTextChange}
                            onTimeChange={onTimeChange}
                            handleValueChange={handleValueChange}
                            history={history}
                        />)
})

test("Create Cardio Snapshot Test", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test("OnSubmit Testing", ()=>{
    const testObject = wrapper.find("form");
    expect(testObject.length).toBe(1);
})

