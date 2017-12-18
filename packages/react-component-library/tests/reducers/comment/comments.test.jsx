import reducer from '../../../src/reducers/comment/comments';
import * as types from '../../../src/constants/comment/actionTypes';


test('should return the initial state', () => {
    expect(
        reducer(undefined, {})
    ).toEqual(
        {
            comments: []
        }
    )
})
