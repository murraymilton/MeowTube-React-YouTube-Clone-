import React, {Component} from'react';
import VideoSearch from './VideoSearch/videoSearch';
import VideoDisplay from './VideoDisplay/videoDisplay';
import RelatedVideos from './VideoSearch/relatedVideos';
import VideoComment from './VideoComment/videoComment';



class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }
 

render() {
    return(
        <React.Fragment>
            <VideoSearch videos={this.state.videos} />
            <VideoDisplay videos={this.state.videos} />
            <RelatedVideos videos={this.state.videos} />
            <VideoComment videos={this.state.videos} />
        </React.Fragment>
    )
  }
}
export default App;