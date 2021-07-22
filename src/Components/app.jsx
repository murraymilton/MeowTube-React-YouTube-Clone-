import React, {Component} from'react';
<<<<<<< HEAD
=======
import Header from './Header/header';
>>>>>>> cd02aee77149bfe00ed689de8ebe0fc4548cec3b
import VideoSearch from './VideoSearch/videoSearch';
import VideoDisplay from './VideoDisplay/videoDisplay';
import RelatedVideos from './VideoSearch/relatedVideos';
import VideoComment from './VideoComment/videoComment';
<<<<<<< HEAD

=======
>>>>>>> cd02aee77149bfe00ed689de8ebe0fc4548cec3b


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
<<<<<<< HEAD
=======

            <Header/>
>>>>>>> cd02aee77149bfe00ed689de8ebe0fc4548cec3b
            <VideoSearch videos={this.state.videos} />
            <container fluid className="app">
            <VideoDisplay/>
            <RelatedVideos videos={this.state.videos} />
            <VideoComment videos={this.state.videos} />
<<<<<<< HEAD
=======
            </container>
>>>>>>> cd02aee77149bfe00ed689de8ebe0fc4548cec3b
        </React.Fragment>
    )
  }
}
export default App;