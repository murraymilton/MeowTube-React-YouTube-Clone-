import { render } from '@testing-library/react';
import React, {Component} from'react';
import VideoDisplay from './VideoDisplay/videoDisplay';


class App extends Component{
render(){
    return(
        <React.Fragment>
            <h1>All about cats</h1>
            <VideoDisplay/>
        </React.Fragment>
    )
  }
}
export default App;