import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../../components/comment/CommentList';
import { initComments, deleteComment } from '../../reducers/comment/comments';

class CommentListContainer extends Component {
    componentWillMount() {
        this._loadComments();
    }

    handleDeleteComment(index) {
        const { comments } = this.props;
        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index + 1)
        ]
        localStorage.setItem('comments', JSON.stringify(newComments));
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }

    render() {
        return (
            <CommentList
                comments={this.props.comments}
                onDeleteComment={this.handleDeleteComment.bind(this)} />
        )
    }

    _loadComments() {
        let comments = localStorage.getItem('comments');
        comments = comments ? JSON.parse(comments) : []
        this.props.initComments(comments);
    }

}

CommentListContainer.propTypes = {
    comments: PropTypes.array,
    initComments: PropTypes.func,
    onDeleteComment: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        comments: 
                state.comments ||
                state.commentsReducer.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initComments: (comments) => {
            dispatch(initComments(comments))
        },
        onDeleteComment: (commentIndex) => {
            dispatch(deleteComment(commentIndex))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentListContainer)