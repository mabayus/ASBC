import React,{Component} from 'react';
import '../css/App.css';
import Menu from './Menu'
class MainComponent extends Component{
    render(){
        return(
            <div >
                <div className="bannerTop"> <Menu /></div>
                <div className="bodyApp"></div>
            </div>
        );
    }
}

export default MainComponent;