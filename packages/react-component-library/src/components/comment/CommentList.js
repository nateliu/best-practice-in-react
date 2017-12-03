import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class CommentList extends React.Component {
    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render(){
        return (
            <div>
                { this.props.comments.map((comment,i)=><Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)}/> )}            
            </div>
        );
    }

}

CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
}