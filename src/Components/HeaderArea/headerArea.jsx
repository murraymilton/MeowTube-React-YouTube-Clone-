import React from 'react';
import './headerArea.css';
import {FaYoutube} from 'react-icons/fa'
import {MdMenu, MdSearch, MdVideoCall, MdViewComfy} from 'react-icons/md'
import {AiTwotoneBell} from 'react-icons/ai'
import Avatar from 'react-avatar';

function HeaderArea(){
    return(
        <div className="header">
            <div className="header_left">
                    <MdMenu className="header_logo" size="3rem"/>
                    <FaYoutube className="header_logo"color="red" fontSize="3rem"/>
                    </div>
                    <div className="header_input">
                    <input type="text" placeholder="Search"></input>
                    <MdSearch className="header_inputButton"fontSize="1.5rem"/> 
                    </div>
                    <div className="header_icons">
                    <MdVideoCall  className="header_icon"size="2.0rem"/>
                    <MdViewComfy className="header_icon" size="2.0rem"/>
                    <AiTwotoneBell className="header_icon" size="2.0rem"/>
                    <Avatar alt="Super Cat"src="/images/supercat.png" size="2.0rem"/>
                    </div>
                    
        </div>
    );
}

export default HeaderArea;

