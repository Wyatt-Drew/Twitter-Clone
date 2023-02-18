import React from 'react'
import './Widgets.css'
import {
  Timeline,
  Share,
  Tweet,
} from "react-twitter-widgets";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <Tweet tweetId={"1591090351384981505"} />

        <Timeline
          dataSource={{ sourceType: "profile", screenName: "elonmusk" }}
          options={{height: "400" }}
        />

        <Share
          url={"https://www.linkedin.com/in/wyatt-drew-493290146/"}
          options={{ text: "#reactjs is awesome", via: "Wyatt Drew" }}
        />
      </div>
    </div>
  );
}

export default Widgets
