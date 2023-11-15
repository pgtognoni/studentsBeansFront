import React, { useState, useEffect } from 'react';
import './styles.css'
import { processTimestamp } from '../postFooter/helpers'

const PostOwner = (props) => {

    const { data } = props
    const [ timestamp, setTimeStamp ] = useState(false)

    const showTimeStapm = () => {
        // const timeEl = document.getElementById('time-stamp')
        // const timeBtn = document.getElementById('timeStamp-btn');
        // if (timeEl) {
        //     timeEl.style.display = 'block'
        //     timeBtn.style.display = 'none'
        //     setTimeStamp(true)
        // }
        setTimeStamp(!timestamp)
    }

    const windowResize = () => {
        const width = window.innerWidth 
        if (width < 550) {
            setTimeStamp(false)
        } else {
            setTimeStamp(true)
        }
    }

    useEffect(() => {
        windowResize()
        window.addEventListener('resize', windowResize)
        return () => {
            window.removeEventListener('resize', windowResize)
        }
    
    }, [])

    return (
        <div className='owner-container'>
            <div>
                <img src={data.owner.profile_pic_url} alt='post owner icon' />
            </div>
            <div className='owner_informtion'>
                <p className='owner_name'>
                    <span className='name'>{data.owner.username} 
                    {!timestamp && <span onClick={showTimeStapm} role='button' aria-label='show-post-date' aria-pressed={timestamp} id='timeStamp-btn'>...</span>}
                    </span>
                    {timestamp && <span className='title-time-stamp' id='time-stamp'>{processTimestamp(data)}</span>}
                </p>
                <p className='owner_location'>{data.location.name}</p>
            </div>
        </div>
    )
}

export default PostOwner