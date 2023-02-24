import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox.js'
import Post from './Post.js'
// import db from "./firebase";
// import FlipMove from "react-flip-move";

function Feed() {

  const displayName = "Wyatt Drew";
  const username = "Wyatt251";
  const verified = true;
  const text = "🚀KSP 2 was released today!";
  const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQd4KePLv5zweu8WQMwsgw3Yp3kqOfH2u6vHe_0_9IwJVpNM8eZBeHVlHT8KkKZwsBJQ&usqp=CAU";
  const avatar = "https://wyatt-drew.github.io/img/profile_pic.jpg";

  const displayName2 = "Wyatt Drew";
  const username2 = "Wyatt251";
  const verified2 = true;
  const text2 = 'TIL that @tailwindcss can automatically strip hover styles for mobile devices.';
  const image2 = "data:image/jpeg;base64,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";
  const avatar2 = "https://wyatt-drew.github.io/img/profile_pic.jpg";


  return (
    <div className = "feed">
      {/* header */}
      <div className = "feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweet box */}
      <TweetBox/>
      {/* Posts */}
      {/* displayName, username, verified, text, image, avatar */}
      <Post
        displayName={displayName}
        username={username}
        verified={verified}
        text={text}
        image={image}
        avatar={avatar}
      />

      <Post
        displayName={displayName2}
        username={username2}
        verified={verified2}
        text={text2}
        image={image2}
        avatar={avatar2}
      />

    </div>
  )
}

export default Feed
