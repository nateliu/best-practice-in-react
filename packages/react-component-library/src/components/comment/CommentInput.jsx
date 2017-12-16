import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export default class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.userName,
            content: ''
        }
    }

    componentDidMount() {
        this.textArea.focus();
    }

    handleUsernameChange(event) {
        this.setState({
            userName: event.target.value
        })
    }

    handleUsernameBlur(event) {
        if (this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(event.target.value)
        }
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            const { userName, content } = this.state
            this.props.onSubmit({ userName, content, createdTime: +new Date() })
        }
        this.setState({ content: '' })
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>Name:</span>
                    <div className='comment-field-input'>
                        <input
                            onBlur={this.handleUsernameBlur.bind(this)}
                            value={this.state.userName}
                            onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>

                <div className='comment-field'>
                    <span className='comment-field-name'>Comments：</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textArea) => this.textArea = textArea}
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>

                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>Publish</button>
                </div>
            </div>
        );
    }

}

CommentInput.propTypes = {
    userName: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
}


CommentInput.defaultProps = {
    userName: ''
}