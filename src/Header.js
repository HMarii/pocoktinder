import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import tinderLogo from "./tinder-emblem.jpg"
function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img className="header__logo" src={tinderLogo} alt="tinderEmblem"></img>


            <IconButton>
            <ForumIcon fontSize="large" className="header__icon"></ForumIcon>
            </IconButton>
            
        </div>
    )
}

export default Header
