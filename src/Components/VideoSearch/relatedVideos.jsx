import React, {Component} from 'react';

class RelatedVideos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    render(){
        return(
            <div className='video-preview'>
                <div className='image-container'>  
                    <img id="thumbnail" alt="" type="text/html" width="213" height="120" src={this.displayVideos} frameBorder="0" />
                </div>
            </div>
        )
    }
}

export default RelatedVideos;