import React from 'react';
import {shallow} from 'enzyme';
import {DashboardHeader} from '../../components/DashboardHeader';

test("Dashboard Header Snapshot Test", ()=>{
    const wrapper = shallow(<DashboardHeader />)
    expect(wrapper).toMatchSnapshot();
})