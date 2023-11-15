import React from 'react'
import LikedIcon from './children/liked_icon'
import UnlikeIcon from './children/unliked_icon'

const LikeButton = (props) => {
  
  const { data } = props
  
  if (data.viewer_has_liked) {
    return <LikedIcon />
  }

  return <UnlikeIcon />
}

export default LikeButton
