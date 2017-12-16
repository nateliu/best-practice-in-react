import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import CommentInput from '../../components/comment/CommentInput';
import { addComment } from '../../reducers/comment/comments';

class CommentInputContainer extends Component {
    constructor() {
        super();
        this.state = { userName: '' };
    }

    componentWillMount() {
        this._loadUsername();
    }

    handleSubmitComment(comment) {
        if (!comment) return;
        if (!comment.userName) return alert('Name is required!');
        if (!comment.content) return alert('Content is required!');
        const { comments } = this.props;
        const newComments = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(newComments));
        if (this.props.onSubmit) {
            this.props.onSubmit(comment);
        }
    }

    render() {
        return (
            <CommentInput
                username={this.state.username}
                onUserNameInputBlur={this._saveUsername.bind(this)}
                onSubmit={this.handleSubmitComment.bind(this)} />
        )
    }

    _loadUsername() {
        const username = localStorage.getItem('userName');
        if (username) {
            this.setState({ username });
        }
    }

    _saveUsername(username) {
        localStorage.setItem('userName', username);
    }

}

CommentInputContainer.propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentInputContainer);