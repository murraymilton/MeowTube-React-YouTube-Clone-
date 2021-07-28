import React from 'react';
import {MdHistory, MdHome,  MdPlaylistPlay, MdRssFeed, MdVideoLibrary, MdWatchLater} from 'react-icons/md'
import { FaFutbol, FaGripfire, FaMusic, FaNewspaper } from 'react-icons/fa';
import {BsFillCollectionPlayFill} from 'react-icons/bs';
import {GiGamepad} from 'react-icons/gi';
import './sideBar.css';
import SideBarRow from './SideBarRow';


function SideBar () {
    return (
        <div className="sidebar">
            <SideBarRow Icon={MdHome}title="Home" color="red" />
            <SideBarRow Icon={FaGripfire}title="Trending"/>
            <SideBarRow Icon={BsFillCollectionPlayFill}title="Subsriptions"/>
            <SideBarRow Icon={MdVideoLibrary}title="Video"/>
            <SideBarRow Icon={MdHome}title="Home"/>
            <SideBarRow Icon={MdHome}title="Home"/>
            <SideBarRow Icon={MdHome}title="Home"/>
            <SideBarRow Icon={MdHome}title="Home"/>
            <SideBarRow Icon={MdHome}title="Home"/>
            <SideBarRow Icon={MdHome}title="Home"/>
            <SideBarRow Icon={MdHome}title="Home"/>

        </div>
    )
}

export default SideBar;