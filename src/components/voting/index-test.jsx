import React       from 'react'
import { shallow } from 'enzyme';
import { expect }  from 'chai'
import Component   from './index';

describe('Voting component', () => {
    it('should render', () => {
        const wrapper = shallow(<Component />);
        expect(wrapper).to.be.ok;
    });
});