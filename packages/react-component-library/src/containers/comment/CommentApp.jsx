import React from 'react';
import CommentInputContainer from './CommentInputContainer';
import CommentListContainer from './CommentListContainer';
import '../../components/comment/Comment.css';

export default class CommentApp extends React.Component {   
    render() {
        return (
            <div className='comment-area'>
                <CommentInputContainer />
                <CommentListContainer />
            </div>
        );
    }   
}