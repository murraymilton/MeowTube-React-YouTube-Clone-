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
            <h1>Related videos here.</h1>
        )
    }
}

export default RelatedVideos;