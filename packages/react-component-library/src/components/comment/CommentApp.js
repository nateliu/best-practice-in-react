import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './Comment.css';

export default class CommentApp extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    handleSubmitComment (comment) {
        if (!comment) return;
        if (!comment.userName) return alert('Name is required!');
        if (!comment.content) return alert('Content is required!');

        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        })
    }

    render(){
        return (
            <div className = 'comment-area'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }

}