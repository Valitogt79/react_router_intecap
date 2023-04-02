import React from 'react'
import posts from '../data/posts'
import { useParams, Navigate } from 'react-router-dom'

const Post = () => {
  const {id} = useParams();
  return (
   <div>
    {
    posts[id-1]?
    <div>
       <h2>{posts[id-1].title}</h2>
    <br />
    <p>{posts[id-1].content}</p>
    <br />
    <p>
      Author: {posts[id-1].author} <br/>
       Posting: {posts[id-1].date}
    </p>
    </div>
    : 
    <div>
      <Navigate to='/Error404' />
    </div>
    }
   </div>
  )
}

export default Post