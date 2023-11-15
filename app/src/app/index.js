import React from 'react'
import Image from './children/image'
import LikeButton from './children/like_button'
import styles from './styles'
import PostOwner from './children/postOwner'
import PostCaption from './children/postCaption'
import CommentText from './children/comments'

const App = (props) => {
  const { data } = props
  console.log('App', props)
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <PostOwner data={data} />
        <CommentText data={data} />
        <LikeButton data={data} />
      </div>
    </main>
  )
}

export default App
