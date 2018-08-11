import React from 'react';
import {shallow} from 'enzyme';
import {ExerciseListPage} from '../../components/ExerciseList';

test("Exercise List Snapshot Test", ()=>{
    const wrapper = shallow(<ExerciseListPage/>)
    expect(wrapper).toMatchSnapshot();
})