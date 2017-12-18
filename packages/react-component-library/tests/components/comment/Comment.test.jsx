import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../../../src/components/comment/Comment';
import  idObj from 'identity-obj-proxy';

function setup() {
    const props = {
        onDeleteComment: jest.fn(),
        comment: "comment",
        index: 1
    }

    const enzymeWrapper = shallow(<Comment {...props} />)

    return {
        props,
        enzymeWrapper
    }
}


it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('div').hasClass('comment')).toBe(true)
})
