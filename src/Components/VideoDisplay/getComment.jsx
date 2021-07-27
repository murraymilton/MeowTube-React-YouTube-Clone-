import React,{Component}from 'react';
import axios from "axios";

class GetComment extends Component{
    constructor(props){
        super(props);
        this.state={
            comments:[]
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData = async() =>{
        try{
            let res = await axios.get(`http://127.0.0.1:8000/comment/?id=${this.props.videos.videoId}`)
            this.setState({comments:res.data});
        }catch(error){
            console.log(error);
        }
    }
    render(){
        return(
        const CommentData = this.state.comments
        const mapData = CommentData.map((comment, videoId) => (<td key={videoId}>{comment.comment}</td>)
        )
    )}

}

export default GetComment;
