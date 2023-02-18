import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox.js'
import Post from './Post.js'
// import db from "./firebase";
// import FlipMove from "react-flip-move";

function Feed() {
  return (
    <div className = "feed">
      {/* header */}
      <div className = "feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweet box */}
      <TweetBox/>
      {/* Posts */}
      <Post/>

    </div>
  )
}

export default Feed