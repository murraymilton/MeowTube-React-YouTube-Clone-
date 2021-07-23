import React, {Component} from 'react';


class VideoComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment : [{
                author: '',
                text: '',
                likes: '',
                videoId: ''
            }]
        }
    }

    render() {
        return(
            <h1>Comment here.</h1>
        )
    }
}
export default VideoComment;