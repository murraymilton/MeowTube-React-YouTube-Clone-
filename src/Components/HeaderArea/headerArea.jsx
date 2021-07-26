import React from 'react';
import './headerArea.css';
import {FaYoutube} from 'react-icons/fa'
import {MdSearch, MdVideoCall, MdViewComfy} from 'react-icons/md'
import {AiTwotoneBell} from 'react-icons/ai'

function HeaderArea(){
    return(
        <body>
        <div className="HeaderArea">
            <div className="Header">
                <header className="header">
                    <button className="button">
                        &#9776;
                    </button>
                    <FaYoutube color="red" fontSize="3rem"/>
                </header>
                <div className="Search">
                    <input type="search" placeholder="Search"></input>
                    <div className="search">
                        <MdSearch fontSize="3rem"/> 
                        </div>
                </div>
                <div className="Icon">
                    <div className="icon"><MdVideoCall fontSize="2.8rem"/></div>
                    <div className="icon"><MdViewComfy fontSize="2.8rem"/></div>
                    <div className="icon"><AiTwotoneBell fontSize="2.8rem"/></div>
                    <div className="icon">
                        <img src="/images/supercat.jpg"alt="supercat"/></div>
                    
                </div>
            </div>
        </div>
        </body>
    );
}

export default HeaderArea;