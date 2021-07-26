// import axios from 'axios';
import React, {Component} from 'react';
// import VideoSearch from "../VideoSearch/videoSearch"



class VideoDisplay extends Component {
    constructor(props){
    super(props);
    this.state = {
        videos: []
        };
    }
    

    onChangeHandler = (event) => {
        this.videoInfo();
        this.displayVideos();
    }

render(){
    return(
        <React.Fragment>
            <form onChange={this.onChangeHandler}>
           <container fluid > 
           <iframe style={{position: 'relative', top: '0px'}}
            id="display"
            width="640" 
            height="360" 
            title="Main Video Player"
            src={`https://www.youtube.com/embed/${this.state.videos.videoId}?autoplay=0&origin=http://example.com`}
            padding="0">
            </iframe>
            </container>
            </form>
        </React.Fragment>
    
    )
}
    }



export default VideoDisplay;