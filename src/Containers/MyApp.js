import React,{Component} from 'react';


import { Route,Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';


import Home from './Home';
import Cpanel from './Cpanel';





class MyApp extends Component {






          render(){

            return (

              <div >


               <Route
                  exact
                  path="/"
                  component={Home}
               />
               <Route
                  exact
                  path="/Quiz"
                  component={Cpanel}
               />





           </div>

        );

      }
}
export default MyApp;
