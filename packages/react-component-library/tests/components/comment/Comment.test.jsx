import React from 'react';
import { shallow, mount, render } from 'enzyme';
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


it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('div').get(0).props.className).toEqual('comment')
})
