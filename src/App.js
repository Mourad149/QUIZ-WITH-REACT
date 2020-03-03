import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Row,Col} from 'reactstrap'
import Cpanel from "./Containers/Cpanel"
import Cheader from "./Components/Cheader"
import MyApp from "./Containers/MyApp"
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
            <div  className="App">
                  <MyApp/>
            </div>
    </BrowserRouter>
  );
}
}

export default App;
