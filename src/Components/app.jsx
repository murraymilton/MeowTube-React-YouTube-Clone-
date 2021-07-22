import { render } from '@testing-library/react';
import React, {Component} from'react';
import Header from './Header/header';
import VideoDisplay from './VideoDisplay/videoDisplay';


class App extends Component{
render(){
    return(
        <React.Fragment>
            <Header/>
            <container fluid className="app">
            <VideoDisplay/>
            </container>
        </React.Fragment>
    )
  }
}
export default App;