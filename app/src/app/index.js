import React from 'react'
import Image from './children/image'
import PostOwner from './children/postOwner'
import CommentText from './children/comments'
import PostFooter from './children/postFooter'
import './styles.css'

const App = (props) => {
  
  const { data } = props

  return (
    <main className='main'>
        <PostOwner data={data} />
        <div className='post-image'>
          <Image data={data} />
        </div>
        <PostFooter data={data} />
        <CommentText data={data} />
    </main>
  )
}

export default App
