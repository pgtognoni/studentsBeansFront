import React, { useState } from 'react'
import LikedIcon from './children/liked_icon'
import UnlikeIcon from './children/unliked_icon'

const LikeButton = (props) => {
  
  const { data, setLikesCount } = props

  const [ toogleLike, setLike ] = useState(data);


  // toogle like button dinamically but not saving the data in the json file
  const handleLike = () => {
    setLike(!toogleLike)

    // increase number of likes of Post if setLikesCount is in props
    if (setLikesCount) {
        if(toogleLike ){
          setLikesCount(prevCount => prevCount - 1)
        } else {
          setLikesCount(prevCount => prevCount + 1)
        }
    }
  }

  return(
    <div role='button' aria-label='like-button' aria-pressed={toogleLike} onClick={handleLike} style={{cursor: 'pointer'}}>
      {toogleLike ? <LikedIcon /> : <UnlikeIcon />}
    </div>
  )

}

export default LikeButton
