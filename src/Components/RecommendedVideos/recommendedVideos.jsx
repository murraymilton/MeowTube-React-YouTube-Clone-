import React from 'react';
import './recommendedVideos.css'
import ThumbnailDisplay from '../ThumbnailDisplay/thumbnailDisplay';

function RecommendedVideos () {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <ThumbnailDisplay 
                title="Cats Dance"
                views="10.7M Views"
                timestamp="3 days"
                channelImage="https://i.ytimg.com/vi/8FUOnGMc66w/maxresdefault.jpg"
                channel="CatsInTheMiddle"
                image=""/>
                <ThumbnailDisplay 
                title="Cats Dance"
                views="10.7M Views"
                timestamp="3 days"
                channelImage="https://i.ytimg.com/vi/8FUOnGMc66w/maxresdefault.jpg"
                channel="CatsInTheMiddle"
                image=""/>
                <ThumbnailDisplay 
                title="Cats Dance"
                views="10.7M Views"
                timestamp="3 days"
                channelImage="https://i.ytimg.com/vi/8FUOnGMc66w/maxresdefault.jpg"
                channel="CatsInTheMiddle"
                image=""/>
            </div>
        </div>
    )
}

export default RecommendedVideos;