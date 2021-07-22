import axios from 'axios';
import React, {Component} from 'react';


class VideoSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    componentDidMount(){
        this.searchVideos();
    }

    searchVideos = async () => {
        let res = await axios.get("https://www.googleapis.com/youtube/v3/search/?q={(event)}&type=video&videoDuration=any&maxResults=25&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI");
        console.log(res)
        this.setState = {
            videos: res.data
        }
        console.log(this.videos)
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value)
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        this.searchVideos();
    }

    displayVideos = () => {
        return this.videos;
    }

    render() {
        return (
            <React.Fragment>
                    <input type="text" name="search" onSubmit={(event) => this.onSubmitHandler(event)} onChange={(event) => this.onChangeHandler(event)} value={this.state.value} placeholder="Search for video here." />
                    <button type="submit" className="btn btn-primary w-md-25">Search</button>
                    {this.displayVideos}
            </React.Fragment>
            
        )
    }
}

export default VideoSearch;