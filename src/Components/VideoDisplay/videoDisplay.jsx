import React from 'react';

const VideoDisplay = (props) => {
    return(
       <div>
           <iframe style={{position: 'relative', top: '0px'}}
            id="display"
            width="640" 
            height="390" 
            title="Main Video Player"
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=0&origin=http://example.com`}
            frameBorder="0">
                {/* <h1>{props.videoId.snippet.title}</h1>
                <p>{props.videoId.snippet.description}</p> */}
            </iframe>

            </div>
        );
    }

export default VideoDisplay;