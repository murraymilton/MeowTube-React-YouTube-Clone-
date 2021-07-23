import axios from 'axios';
import React, {Component} from 'react';

// API_KEY:  AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI

class VideoSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [
                {videoId: ''}
            ],
            search_input: ''
        }
    }

    // componentDidMount(){
    //     this.searchVideos();
    // }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.searchVideos(this.state.search_input);
    }

    searchVideos = async (event) => {
        let res = await axios.get(`https://www.googleapis.com/youtube/v3/search/?q=${this.state.search_input}&type=video&videoDuration=any&maxResults=25&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`);
        this.setState({
            videos: res.data
        });
    }

    displayVideos = async (video, videoId) => {
        this.state.videos.map(video, videoId)
        return (
            await axios.post(`https://youtube.googleapis.com/youtube/v3/thumbnails/set?videoId=${this.state.videos.videoId}&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`)
        )
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="">
                <form className="text-center"onSubmit={this.onSubmitHandler}>
                <input type="text" name="search_input"  onChange={this.onChangeHandler} value={this.state.search_input} placeholder="Search for video here." />
                    <button type="submit" className="btn btn-primary w-md-25">Search</button>
                </form>
                    {this.displayVideos}
                    </div>
            </React.Fragment>
            
        )
    }
}

export default VideoSearch;