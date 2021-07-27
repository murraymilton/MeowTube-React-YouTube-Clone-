import axios from 'axios';
import React, {Component} from 'react';

class RelatedVideos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }


    relatedVideoSearch = async () => {
        let res = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.props.videos.videoId}&type=video&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`)
        this.setState({
            videos: res.data
        })
    }

    handleChange = (event) => {
        this.relatedVideoSearch();
        this.displayVideos();
    }

    render(){
        return(
            <div className='video-preview'>
                <div className='image-container'>
                    <input type="thumbnail" onChange={this.handleChange} />  
                    <img id="thumbnail" alt="" type="text/html" width="213" height="120" src={this.displayVideos} frameBorder="0" />
                </div>
            </div>
        )
    }
}

export default RelatedVideos;