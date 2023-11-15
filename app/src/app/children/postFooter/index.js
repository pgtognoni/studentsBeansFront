import React, { useState } from 'react';
import LikeButton from "../like_button";
import { getNumberLikes, processTimestamp } from "./helpers";
import './styles.css'

const PostFooter = (props) => {
    const { data } = props;

    //change the number of likes in the post dinamically without saving it in the database
    const [ likesCount, setLikesCount ] = useState(getNumberLikes(data))

    return(
        <div className='footer-container'>
            <div className='footer-text'>
                <span className='number-likes'>{likesCount.toLocaleString()} likes</span>
                <span className='footer-time-stamp'>{processTimestamp(data)}</span>
            </div>
            <div className='footer-like-btn'>
                <LikeButton data={data.viewer_has_liked} setLikesCount={setLikesCount} />
            </div>
        </div>
    )
}

export default PostFooter;