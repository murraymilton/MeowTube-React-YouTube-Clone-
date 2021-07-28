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
            <SideBarRow selected Icon={MdHome}title="Home" color="red" />
            <SideBarRow Icon={FaGripfire}title="Trending"/>
            <SideBarRow Icon={BsFillCollectionPlayFill}title="Subsriptions"/>
            <SideBarRow Icon={MdVideoLibrary}title="Video"/>
            <hr/>
            <SideBarRow selected Icon={MdVideoLibrary}title="Library" color="red" />
            <SideBarRow Icon={MdHistory}title="History"/>
            <SideBarRow Icon={MdWatchLater}title="Subsriptions"/>
            <SideBarRow Icon={MdPlaylistPlay}title="MeowTube Videos"/>
            <SideBarRow Icon={GiGamepad}title="Gaming"/>
            <SideBarRow Icon={MdRssFeed}title="Go Live"/>
            <SideBarRow Icon={FaFutbol}title="Sports"/>
            <SideBarRow Icon={FaMusic}title="Music"/>
            <SideBarRow Icon={FaNewspaper}title="News"/>
            <hr/>

        </div>
    )
}

export default SideBar;