import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './Comment.css';

export default class CommentApp extends React.Component {
    render(){
        return (
            <div className = 'comment-area'>
                <CommentInput />
                <CommentList />
            </div>
        );
    }

}