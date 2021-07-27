import axios from 'axios';
import React, {Component} from 'react';

// API_KEY:  AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI

class VideoSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            search_input: ''
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.searchVideos(this.state.search_input);
        return(
            this.state.videos
        )
    }

    searchVideos = async () => {
        try {
            let res = await axios.get(`https://www.googleapis.com/youtube/v3/search/?q=${this.state.search_input}&type=video&videoDuration=any&maxResults=25&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`);
            this.setState({
                videos: res.data
            });
        }
        catch(ex) {
            console.log('Error in API call.');
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="">
                <form className="text-center"onSubmit={this.onSubmitHandler}>
                <input type="text" name="search_input"  onChange={this.onChangeHandler} value={this.state.search_input} placeholder="Search for video here." />
                    <button type="submit" className="btn btn-primary w-md-25">Search</button>
                </form>
                </div>
                <div className = "video-preview">
                    <div className = "image-container">
                        <input type="thumbnail" />
                        <img id="thumbnail" alt="" type="text/html" width="213" height="120" url={`https://www.youtube.com/watch?v=${this.mapVideo}`} frameBorder="0" />    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default VideoSearch;