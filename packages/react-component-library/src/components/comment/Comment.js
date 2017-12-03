import React from 'react';

export default class Comment extends React.Component {
    render(){
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>`{this.props.comment.userName} : `</span>
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        );
    }

}