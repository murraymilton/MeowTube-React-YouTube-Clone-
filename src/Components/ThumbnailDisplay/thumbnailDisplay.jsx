import React from 'react';
import Avatar from 'react-avatar';

function ThumbnailDisplay({image, title, channel, channelImage, views, timestamp,}) {
    return (
        <div className="videoCard">
            <img className="videoCard_thumbnail"src={image} alt="" />
            <div className="video__info">
            <Avatar className="videoCard__avatar" alt={channel} src={channelImage}/>
            <div className="video_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views}  {timestamp}
                </p>
                </div>
             </div>
        </div>
    );
}
export default ThumbnailDisplay;