import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './Comment.css';

export default class CommentApp extends React.Component {
    handleSubmitComment (comment) {
        console.log(comment)
    }

    render(){
        return (
            <div className = 'comment-area'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList />
            </div>
        );
    }

}