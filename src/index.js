import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import  CommentDetail from './CommentDetail';

const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Joe" date="Today at 2.00PM" content="WOW" avatar="https://pngimg.com/uploads/avatar/avatar_PNG47.png"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Ken" date="Today at 9.25AM" content="YES" avatar="http://hollywoodvideo.com/wp-content/uploads/2013/08/avatar-whatshisface.jpg"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Pete" date="Yesterday at 7.06PM" content="so good!" avatar="https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700__340.jpg"/>
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));