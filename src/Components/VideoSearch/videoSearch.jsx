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
        console.log(this.state.search_input);
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.searchVideos(this.state.search_input);
    }

    searchVideos = async (event) => {
        let res = await axios.get(`https://www.googleapis.com/youtube/v3/search/?q=${this.state.search_input}&type=video&videoDuration=any&maxResults=25&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`);
        console.log(res)
        this.setState({
            videos: res.data
        });
        console.log(this.state.videos)
    }

    displayVideos = () => {
        return this.videos;
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