import React from 'react';
import {shallow} from 'enzyme';
import {DashboardPage} from '../../components/DashboardPage';

test("Dashboard Page Snapshot Test", ()=>{
    const wrapper = shallow(<DashboardPage />)
    expect(wrapper).toMatchSnapshot();
})