import React, {Component} from'react';
import VideoSearch from './VideoSearch/videoSearch';
import HeaderArea from './HeaderArea/headerArea';
import RelatedVideos from './VideoSearch/relatedVideos';
import VideoComment from './VideoComment/videoComment';
import './app.css'
import axios from 'axios';
import MainArea from './MainArea/mainArea';
import RecommendedVideos from './RecommendedVideos/recommendedVideos';
import SideBar from './SideBar/sideBar';



class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            videos:[],
            relatedVideos:[],
            searchResults:[],
            comments:[],
            defaultVideo: 'E9U9xS4thxU',
            title: '',
            description:'',
            key: 'AIzaSyDSM-4gOdf1LwrhQQyg7_IMM1icmv4jQUI'

        }
    }
     get_videos = async(search) => {
        try{
            let res = await axios.get(`http://www.googleapis.com/youtube/v3/search?part=snippet&id${search}&type=video&maxResults=5&key=${this.state.key}`)
            let videoObjects = res.data.items
            this.setState({
                get_videoResults:videoObjects
            }); console.log(videoObjects);
        }catch(error){
            console.log(error);
        }
    }
    relatedVideoSearch = async (videoId) => {
        try{
            let res = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${this.state.key}`)
            let videoObjects = res.data.items
            this.setState({
                relatedVideos: videoObjects
            }); console.log(videoObjects);
        }catch(error){
            console.log(error);
        }
        
    }
     setVideo = (video) => {
    this.setState({
      selectedVideo: video
    })
    this.collapseSearchResults();
    this.defineDefaultValues(video.id.videoId, video.snippet.title, video.snippet.description)
    this.getRelatedVideos(video.id.videoId)
  }

  collapseSearchResults = () => {
    this.setState({
      searchResults: []
    })
  }

  defineDefaultValues = (id, name, des) => {
    this.setState({
      defaultVideo: id,
      title: name,
      description: des
    })
  }

  commentTable = async() => {
    let response = await axios.get(`http://127.0.0.1:8000/youtube_app/`)
        let temp = response.data
        this.setState ({
            allComments: temp,
        });
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
    console.log(this.state.defaultVideo);
    console.log(this.state.relatedVideos);
    let url = `https://www.youtube.com/embed/${this.state.defaultVideo}?autoplay=0`
    return(
        <React.Fragment>
          <div className="app"></div>
            <HeaderArea/>
            <div className="app_page">
              <SideBar/>
              <RecommendedVideos/>
            </div>
            <MainArea/>
            <VideoSearch videos={this.state.videos} mapVideos={this.mapVideos} />
            <VideoComment videos={this.state.videos} />
            <RelatedVideos relatedVideos={this.state.relatedVideos} videoInfo={this.videoInfo} displayVideos={this.displayVideos} />
            <VideoComment videos={this.state.videos} />
            <div>
            <div><div className="text-center">
          <h1>{this.state.title}</h1>
          <iframe id="player" 
          type="text/html" 
          width="640" height="390"
          src={url}
          alt="Else Statement"
          frameborder="0" > 
          </iframe>
          <h2>{this.state.description}</h2>
          </div>
          </div>
          </div>

        </React.Fragment>
    )
  }
}
export default App;