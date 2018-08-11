import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';

test("Header Test", ()=>{
    const wrapper = shallow(<Header startLogout={()=>{}}/>)
    expect(wrapper).toMatchSnapshot();
})

test("Testing Log out", ()=> {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={onClickSpy}/>)
    const logoutButton = wrapper.find('button');
    expect(logoutButton.length).toBe(1);
    logoutButton.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
})