import React from 'react';
import PropTypes from 'prop-types';

export default class CommentInput extends React.Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            content:  ''
        }
    }

    componentWillMount(){
        this._loadUserName();
    }

    componentDidMount() {
        this.textArea.focus();
    }

    handleUsernameChange (event) {
        this.setState({
            userName: event.target.value
        })
    }

    handleUsernameBlur (event) {
        this._saveUserName(event.target.value)
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit () {
        if (this.props.onSubmit) {
            const { userName, content } = this.state
            this.props.onSubmit({userName, content})
        }
        this.setState({ content: '' })
    }

    render(){
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
                            ref = {(textArea)=>this.textArea = textArea}
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

    _saveUserName (userName) {
        localStorage.setItem("userName",userName);
    }

    _loadUserName () {
        const userName = localStorage.getItem("userName");
        if ( userName) {
            this.setState({
                userName: userName
            })
        }
    }
}

CommentInput.propTypes = {
    onSubmit: PropTypes.func
}