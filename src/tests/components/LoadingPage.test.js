import React from 'react';
import {shallow} from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test("Loading Page Snapshot Test", ()=>{
    const wrapper = shallow(<LoadingPage/>)
    expect(wrapper).toMatchSnapshot();
})