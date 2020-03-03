import {Button,Nav,NavItem,NavLink,Container} from 'reactstrap'
import React, {Component} from 'react'
import { Router, Route, Link } from "react-router-dom";
import Home from '../Containers/Home'
import { connect } from 'react-redux';




    class Cheader extends Component {
            render(){
                    return(
                      <div>
                      <Container>
                        <Nav>
                           <NavItem>
                            <Link to="/"> <NavLink onClick={this.props.onClickHandler} >{this.props.nav2}</NavLink></Link>
                           </NavItem>
                           <NavItem>
                             <NavLink >{this.props.nav1}</NavLink>
                           </NavItem>
                         </Nav>
                         </Container>
                      </div>
                    );
            }
      }
      const mapStateToProps = state => {
          return {
              ctr: state.counter,
              qz:state.Quiz,
              status:state.status,
              scre:state.score,
              qzP:state.quizParam

          };
      };
      const mapDispatchToProps = dispatch => {
          return {
            onClickHandler:()=>dispatch({type:"HOME"}),

          };
      };
export default connect(mapStateToProps,mapDispatchToProps)(Cheader);
