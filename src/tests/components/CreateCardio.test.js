import React from 'react';
import {shallow} from 'enzyme';
import {CreateCardio} from '../../components/CreateCardio';

let onSubmit, onTextChange, onTimeChange, handleValueChange, wrapper;

beforeEach(()=>{
    onSubmit = jest.fn();
    onTextChange = jest.fn();
    onTimeChange = jest.fn();
    handleValueChange  = jest.fn();
    wrapper = shallow(  <CreateCardio 
                            onSubmit={onSubmit} 
                            onTextChange={onTextChange}
                            onTimeChange={onTimeChange}
                            handleValueChange={handleValueChange}
                        />)
})

test("Create Cardio Snapshot Test", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test("OnSubmit Testing", ()=>{
    const testObject = wrapper.find("form");
    expect(testObject.length).toBe(1);
})

