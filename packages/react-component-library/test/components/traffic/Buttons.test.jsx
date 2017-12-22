import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Buttons from '../../../src/components/traffic/Buttons';

function setup() {
    const props = {
        go :jest.fn(),
        caution:jest.fn(),
        stop: jest.fn(),
        lightStatus:"GO"
    }

    const enzymeWrapper = shallow(<Buttons {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('traffic/Buttons', () => {
    it('renders correctly with default props', () => {
        const { enzymeWrapper } = shallow(<Buttons />)
        expect(shallowToJson(enzymeWrapper)).toMatchSnapshot();
    });

    it('renders correctly with GO Status', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('.trafficButton').length).toEqual(3);
        expect(shallowToJson(enzymeWrapper)).toMatchSnapshot();
    })
})