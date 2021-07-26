import React, {Component} from'react';
import Header from './Header/header';
import VideoSearch from './VideoSearch/videoSearch';
import VideoDisplay from './VideoDisplay/videoDisplay';
import RelatedVideos from './VideoSearch/relatedVideos';
import VideoComment from './VideoComment/videoComment';
import axios from 'axios';


class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            videos: [
                {videoId: ''},
                {thumbnails: ''}
            ]
        }
    }
 
    displayVideos = async (event) => {

        let res = await axios.get(`https://www.googleapis.com/youtube/v3/activities/?${this.state.video.videoId}&snippet=snippet.thumbnails.default.url`)
        console.log(res)
        this.setState({
            thumbnails: res.data
           });
        this.state.videos.map((video, videoId) => {
           return(
            //    key = videoId
               this.state.video.thumbnails
           )
        });
    }

render() {
    return(
        <React.Fragment>
            <Header/>
            <VideoSearch videos={this.state.videos} />
            <container fluid className="app">
            <VideoDisplay displayVideos={this.displayVideos} />
            <RelatedVideos displayVideos={this.displayVideos} />
            <VideoComment videos={this.state.videos} />
            </container>
        </React.Fragment>
    )
  }
}
export default App;