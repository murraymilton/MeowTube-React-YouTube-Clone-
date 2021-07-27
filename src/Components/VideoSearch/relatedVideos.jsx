import React from 'react';



function RelatedVideos (props) {

return (
    <div>
        {props.relatedVideos.map(item => <VideoDetails key={item.videoId} item={item} selected_video={props.selected_video} />)}
    </div>
        );
}
    function VideoDetails (props) {
        const item = props.item
        return(
            <div className='card' style={{'maxwidth': '550px', 'maxheight': '18rem'}} onClick={() => props.selected_video(item)}>
                <div className='row g-0'>
                    <div className="col-md-4"></div>
                         <img id="thumbnail" alt="" type="text/html" width="213" height="120" src={item.snippet.thumbnails.default.url} alt=""  />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{item.snippet.title}</h4>
                        </div>
                    </div>   
                </div>
        );
    }


export default RelatedVideos;