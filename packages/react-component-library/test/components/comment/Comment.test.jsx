import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Comment from '../../../src/components/comment/Comment';

function setup() {
    const props = {
        onDeleteComment: jest.fn(),
        comment: { "userName": "fakeName", "content": "comment in testing." },
        index: 1
    }

    const enzymeWrapper = shallow(<Comment {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('comment/Comment', () => {
    it('renders correctly with props', () => {
        const { enzymeWrapper } = setup();
        expect(shallowToJson(enzymeWrapper)).toMatchSnapshot();
    })
})
