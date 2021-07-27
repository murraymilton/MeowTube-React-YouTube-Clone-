import axios from "axios";
import React, {Component} from 'react';


class videoComment extends Component{

    constructor(props) {
        super(props);
        this.state = {
            videos:[],
            comment:[]
        }
    }

    handlechange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
     postComment = async()=> {
         let res = await axios.post('http://127.0.0.1:8000/comments/', this.state);
            this.setState({
               comment: this.comment.append(this.state.first_comment)
            });
     }
     handleSubmit =(event) => {
         this.preventDefault();
         this.postComment();
         return(this.state.comment)
     }
     render(){
         return(
            <React.Fragment>
                <div className="">
                <form className="text-center"onSubmit={this.handleSubmit}>
                <input type="text" name="first_comment"  onChange={this.handlechange} value={this.state.first_comment} placeholder="Enter comment here" />
                    <button type="submit" className="btn btn-primary w-md-25">Submit</button>
                </form>
                    </div>
            </React.Fragment>
         )
     }
}
export default videoComment;