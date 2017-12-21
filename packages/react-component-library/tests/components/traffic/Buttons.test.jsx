import React from 'react';
import { shallow } from 'enzyme';
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

describe('comment component', () => {
    it('should render correctly with default state', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper).toMatchSnapshot();
    })
})