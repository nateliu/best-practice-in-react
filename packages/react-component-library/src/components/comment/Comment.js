import React from 'react';
import PropTyps from 'prop-types';

export default class Comment extends React.Component {
    constructor () {
        super();
        this.state = {timeString: ''};
    }

    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(this._updateTimeString.bind(this),5000);
    }

    componentWillUnmount () {
        clearInterval(this._timer);
    }

    render(){
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>`{this.props.comment.userName} : `</span>
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
            </div>
        );
    }

    _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
        timeString: duration > 60
            ? `${Math.round(duration / 60)} Mins ago`
            : `${Math.round(Math.max(duration, 1))} Secs ago`
        })
    }
}

Comment.propTypes = {
    comment: PropTyps.object.isRequired
}