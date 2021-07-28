import React, {Component} from'react';
import VideoSearch from './VideoSearch/videoSearch';
import HeaderArea from './HeaderArea/headerArea';
import VideoDisplay from './VideoDisplay/videoDisplay';
import RelatedVideos from './VideoSearch/relatedVideos';
import VideoComment from './VideoComment/videoComment';
import './app.css'
import axios from 'axios';
import MainArea from './MainArea/mainArea';



class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            videos:[],
            relatedVideos:[]
        }
    }
    componentDidMount(){
            this.get_videos()
    }
    async get_videos(search){
        try{
            let res = await axios.get(`http://www.googleapis.com/youtube/v3/search?part=snippet&id${this.state.videos.videoId}&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`)
            this.setState({
                videos:res.data,
                relatedVideos:null,
            }); console.log(this.state.videos);
        }catch(error){
            console.log(error);
        }
    }
    async relatedVideoSearch(videoId) {
        try{
            let res = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.props.videos.videoId}&type=video&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`)
            this.setState({
                relatedVideos: res.data
            })
        }catch(error){
            console.log(error);
        }
        
    }

    

    videoInfo = async () => {
        let res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.state.videos.videoId}&key=AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI`)
        this.setState({
            videos:res.data
        })
    }    

    mapVideos = async () => {
        this.state.videos.map((video, videoId) => {
            console.log(this.state.videos)
            return(
                this.setState({
                    video: videoId
                    })
            )
        });
    console.log(this.state.video)
    }

    getComments = async () => {
        let res = await axios.get('https://127.0.0.1:8000/comment/')
        this.setState({
            comments: res.data
        })
    }

    likeComment = async () => {
        let res = await axios.patch(`https://127.0.0.1:8000/comment/?${this.state.selected_comment}`)
        this.setState({
            selected_comment: res.data
        })
    }

    render() {
        return(
            <React.Fragment>
                <HeaderArea/>
                <MainArea/>
                <VideoSearch videos={this.state.videos} mapVideos={this.mapVideos} />
                <VideoDisplay displayVideos={this.displayVideos} />
                <VideoComment videos={this.state.videos} />
                <RelatedVideos relatedVideos={this.state.relatedVideos} videoInfo={this.videoInfo} displayVideos={this.displayVideos} />
            </React.Fragment>
        )
    }
}
export default App;