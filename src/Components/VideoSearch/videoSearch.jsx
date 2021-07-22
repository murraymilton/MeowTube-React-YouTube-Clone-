import axios from 'axios';
import React, {Component} from 'react';

// API_KEY:  AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI

class VideoSearch extends Component{

    constructor(props) {
        super(props);
        this.state = {
            video: []
        }
    }

    componentDidMount(){
        this.searchVideo();
    }

    searchVideo = async () => {
        let res = await axios.get("https://www.googleapis.com/youtube/v3/search/?q={this.state}&type=video&videoDuration=any&maxResults=25");
        this.makeGetRequest();
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    displayVideos = (event) => {
        event.preventDefault();
        this.searchVideo();
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input value={this.state.value} onChange={(event) => this.onChangeHandler(event)} placeholder="Search for video here." />
                    {this.displayVideos}
                </div>
            </React.Fragment>
            
        )
    }
}
export default VideoSearch;