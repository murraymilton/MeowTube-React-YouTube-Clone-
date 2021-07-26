import axios from 'axios';
import React, {Component} from 'react';
import VideoSearch from "../VideoSearch/videoSearch"



class VideoDisplay extends Component {
    constructor(props){
    super(props);
    this.state = {

        comment: [
            {author:""},
            {text:""},
            {likes: 0},
            {videoId:''}
        ],
        videos: [
           { videoId:''}
        ]

        };
    }
    componentDidMount(){
        this.getVideoId();
    }
    getVideoId = async () => {
        let res = await axios.get(`https://youtube.googleapis.com/youtube/v3/thumbnails/set?videoId=${this.state.videos.videoId}&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`)
        console.log(res);
        this.setState({
            comment: res.data.items,
            videos: this.props.videos,
        })
    }
render(){
    return(
        <React.Fragment>
           <container fluid > 
           <iframe style={{position: 'relative', top: '0px'}}
            id="display"
            width="640" 
            height="390" 
            title="Main Video Player"
            src={`https://www.youtube.com/embed/${this.state.videos.videoId}?autoplay=0&origin=http://example.com`}
            padding="0">
            </iframe>
            </container>
        </React.Fragment>
    
    )
}
    }



export default VideoDisplay;