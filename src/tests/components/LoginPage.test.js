import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test("Login Page Snapshot Test", ()=>{
    const wrapper = shallow(<LoginPage startLogin={()=>{}}/>)
    expect(wrapper).toMatchSnapshot();
})

test("Testing Log in", ()=> {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={onClickSpy}/>)
    const logoutButton = wrapper.find('button');
    expect(logoutButton.length).toBe(1);
    logoutButton.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
})