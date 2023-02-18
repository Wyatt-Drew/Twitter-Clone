import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from "@material-ui/core"
function TweetBox() {
  return (
    <div className = "tweetBox">
      <form>
        <div className = "tweetBox__input">
            <Avatar src = "https://media-exp1.licdn.com/dms/image/D5603AQHO9zQ9OHxluA/profile-displayphoto-shrink_200_200/0/1665876644393?e=1673481600&v=beta&t=DJHVL554uuGkZp6NXpLnZd0_6nCnc3DvV0z2ecnPjAM"/>
            <input placeholder = "What's happening?"></input>
            <input className = "tweetBox__imageInput"
            placeholder = "Enter Image URL"></input>
        </div>
        <Button className = "tweetBox__tweetButton">
            Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
