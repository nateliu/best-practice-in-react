import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
    render(){
        const comments = [
            {userName: 'Jerry', content: 'Hello'},
            {userName: 'Tomy', content: 'World'},
            {userName: 'Lucy', content: 'Good'}
        ]

        return (
            <div>
                {comments.map((comment,i)=><Comment comment={comment} key={i}/> )}            
            </div>
        );
    }

}