import { render } from '@testing-library/react';
import React, {Component} from'react';
<<<<<<< HEAD
import VideoSearch from './VideoSearch/videoSearch';
import VideoDisplay from './VideoDisplay/videoDisplay';
import RelatedVideos from './VideoSearch/relatedVideos';
import VideoComment from './VideoComment/videoComment';
=======
import VideoDisplay from './VideoDisplay/videoDisplay';
>>>>>>> bc3bf94259c5832854f2e813b58c04765a4e7e93


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
<<<<<<< HEAD
            <VideoSearch videos={this.state.videos} />
            <VideoDisplay videos={this.state.videos} />
            <RelatedVideos videos={this.state.videos} />
            <VideoComment videos={this.state.videos} />
=======
            <h1>All about cats</h1>
            <VideoDisplay/>
>>>>>>> bc3bf94259c5832854f2e813b58c04765a4e7e93
        </React.Fragment>
    )
  }
}
export default App;