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
        video_key:''
        }
        //API Key request here?: will adjust as needed
<<<<<<< HEAD
        // API_KEY:  
    }
=======
    } //{this.state.video_id}
>>>>>>> cd02aee77149bfe00ed689de8ebe0fc4548cec3b
render(){
    return(
        <React.Fragment>
           <div class="responsive-video"> <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/hY7m5jjJ9mM?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe></div>
        </React.Fragment>
    
    )
}
    }



export default VideoDisplay;