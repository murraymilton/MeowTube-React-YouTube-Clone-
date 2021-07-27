import axios from "axios";
import React, {Component} from 'react';


<<<<<<< HEAD
class videoComment extends React.Component{
    constructor(props){
    super(props);
        this.state = ({
=======
class videoComment extends Component{

    constructor(props) {
        super(props);
        this.state = {
>>>>>>> 7306a6f139247a6fe99ef98000dfacefd91635bd
            videos:[],
            comment:[]
        }
    }

    handlechange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
     postComment = async()=> {
         await axios.post('http://127.0.0.1:8000/comments/', this.state);
            this.setState({
               comment: this.comment.append(this.state.first_comment)
            });
     }
     handleSubmit(event) {
         this.preventDefault();
         console.log(event);
         this.postComment.bind(this);
         console.log(event);
     }
     render(){
         return(
            <React.Fragment>
                <div className="">
                    <h2>Comments</h2>
                <form className="text-center"onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" name="comment"  onChange={this.handlechange.bind(this)} value={this.state.comment} placeholder="Enter comment here" />
                <input type='submit' value='Submit Commit'/>
                </form>
            </div>
            </React.Fragment>
         )
     }
}
export default videoComment;