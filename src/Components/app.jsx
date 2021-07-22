import { render } from '@testing-library/react';
import React, {Component} from'react';
import Header from './Header/header';
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

render(){
    return(
        <React.Fragment>

            <Header/>
            <VideoSearch videos={this.state.videos} />
            <container fluid className="app">
            <VideoDisplay/>
            <RelatedVideos videos={this.state.videos} />
            <VideoComment videos={this.state.videos} />
            </container>
        </React.Fragment>
    )
  }
}
export default App;