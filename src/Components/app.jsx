import React, {Component} from'react';
import VideoSearch from './VideoSearch/videoSearch';
import HeaderArea from './HeaderArea/headerArea';
import VideoDisplay from './VideoDisplay/videoDisplay';
import RelatedVideos from './VideoSearch/relatedVideos';
import VideoComment from './VideoComment/videoComment';
import './app.css'
import axios from 'axios';
import MainArea from './MainArea/mainArea';



class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }
    

    videoInfo = async () => {
        let res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.state.videos.videoId}&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`)
        this.setState({
            videos:res.data
        })
    }    

    displayVideos = () => {
        this.state.videos.map((video, videoId) => {
           return(
               this.setState({
                video: axios.get(`https://i.ytimg.com/vi/${this.state.video.id.videoId}/default.jpg`)
               })
           )
        });
    }

render() {
    return(
        <React.Fragment>
            <HeaderArea/>
            <MainArea/>
            <VideoSearch videos={this.state.videos} videoInfo={this.videoInfo} displayVideos={this.displayVideos} />
            <container fluid className="app">
            <VideoDisplay displayVideos={this.displayVideos} />
            <RelatedVideos videos={this.state.videos} videoInfo={this.videoInfo} displayVideos={this.displayVideos} />
            <VideoComment videos={this.state.videos} />
            </container>
        </React.Fragment>
    )
  }
}
export default App;