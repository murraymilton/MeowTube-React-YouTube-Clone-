import React, {Component} from 'react';
import axios from 'axios';
import VideoSearch from '../VideoSearch/videoSearch';



class VideoDisplay extends Component {
    constructor(props){
    super(props);
    this.state = {
        video_id: "",
        author:"",
        text:"",
        likes: 0,
        videoId:''
        }

    } //{this.state.video_id}

render(){
    return(
        <React.Fragment>
           <div className="responsive-video"> <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/hY7m5jjJ9mM?autoplay=1&origin=http://example.com"
  frameBorder="0"></iframe></div>
        </React.Fragment>
    
    )
}
    }



export default VideoDisplay;