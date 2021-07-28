import React from 'react';
import './mainArea.css';
import {MdHistory, MdHome,  MdPlaylistPlay, MdRssFeed, MdVideoLibrary, MdWatchLater} from 'react-icons/md'
import { FaFutbol, FaGripfire, FaMusic, FaNewspaper } from 'react-icons/fa';
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'

function MainArea(){
    return(
        <div className="MainArea">


            <div className=" Sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                        <MdHome color="red"fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaGripfire color="grey"fontSize="3rem"/>
                        <div>Trending</div>
                    </div>
                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color="grey"fontSize="3rem"/>
                        <div>Subsription</div>
                    </div>
                    <div className="Library"></div>
                    <div className="Quick_Icon">
                        <MdHome color="grey"fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdVideoLibrary color="grey"fontSize="3rem"/>
                        <div>Video Library</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdHistory color="grey"fontSize="3rem"/>
                        <div>History</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdWatchLater color="grey"fontSize="3rem"/>
                        <div>Watch Later</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdPlaylistPlay color="grey"fontSize="3rem"/>
                        <div>MeowTube (A YouTube Clone)</div>
                    </div>
                    </div>
                    <div className="More_From_Youtube">
                    <div className="Quick_Icon">
                        <GiGamepad color="grey"fontSize="3rem"/>
                        <div>Gaming</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdRssFeed color="grey"fontSize="3rem"/>
                        <div>Live</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaFutbol color="grey"fontSize="3rem"/>
                        <div>Sports</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaMusic color="grey"fontSize="3rem"/>
                        <div>Music</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaNewspaper color="grey"fontSize="3rem"/>
                        <div>News</div>
                    </div>
                </div>
            </div>


            <div className="Main">
                <div className="Videos">
                    
                </div>
                Main For Video Thumbnails
            </div>
        </div>
    )
}
export default MainArea;