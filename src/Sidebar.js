import React from 'react';
import "./Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Button } from "@material-ui/core"

function Sidebar(){
    return (
        <div className = "sidebar">
        {/* Twitter Icon */}
        <TwitterIcon className = "sidebar__twitterIcon"/>
        {/* <SidebarOption /> */}
        <SidebarOption active text = "Home" Icon = {HomeIcon} />
        <SidebarOption text = "Explore" Icon = {TagIcon} />
        <SidebarOption text = "Notifications" Icon = {NotificationsNoneIcon} />
        <SidebarOption text = "Messages" Icon = {MailOutlineIcon} />
        <SidebarOption text = "Bookmarks" Icon = {BookmarkBorderIcon} />
        <SidebarOption text = "Lists" Icon = {ListAltIcon} />
        <SidebarOption text = "Profile" Icon = {Person2OutlinedIcon} />
        <SidebarOption text = "More" Icon = {MoreHorizRoundedIcon} />
        <Button variant="outlined" className = "sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}
export default Sidebar;