import {Button} from 'reactstrap'
import React, {Component} from 'react'
import { Row,Col,Container} from 'reactstrap'
import Cbutton from '../Components/Cbutton'
import Clist from '../Components/Clist'
import Cheader from '../Components/Cheader'
import { Router, Route, Link } from "react-router-dom";
import Public from '../public/Public.css'
import data from '../Data/Data.json'
import series from '../Data/Series.json'
import marques from '../Data/Marques.json'
import chocolat from '../Data/Chocolat.json'
import chanteurs from '../Data/Chanteurs.json'



import { connect } from 'react-redux';

import axios from "axios"
    class Cpanel extends Component {

        componentDidMount(){
          if (this.props.qzP[0]==="Marvel heroes") {
            this.props.onStart(data)
          }else if (this.props.qzP[0]==="Séries americaines") {
            this.props.onStart(series)

          } else if (this.props.qzP[0]==="Marques, logos et slogans") {
              this.props.onStart(marques)

            }else if (this.props.qzP[0]==="Chocolats") {
                this.props.onStart(chocolat)

              }else if (this.props.qzP[0]==="Chanteurs internationaux") {
                  this.props.onStart(chanteurs)

                }

          }





        onClickHandler( ){
          alert("YOUR CURRENT SCORE IS : "+this.props.scre + "/10")
        }


            render(){

              if(this.props.status===true && this.props.ctr !== 9){
                const answers=this.props.qz[this.props.ctr].propositions
                console.log(answers)

                      return(

                      <div>
                      <Row>
                        <Col md={{offset:3 , size:6}} sm={{offset:3 , size:6}} style={{ display: "flex",flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}  >
                          <Cheader nav1="Quiz" nav2="Home"/>
                        </Col>
                      </Row>
                      <Row style={{margin:"100px"}}>
                        <Col  md={{offset:3 , size:6}} sm={{offset:3 , size:6}}>
                          <Container>
                              <Row>
                                <Col>
                                  <h3> {this.props.qz[this.props.ctr].question}</h3>
                                </Col>
                              </Row>
                              <Row >
                                <Col md={{offset:4 , size:4}} sm={{offset:4 , size:4}}>
                                  <Clist  answers={answers} correct={this.props.qz[this.props.ctr].réponse}/>
                                </Col>
                              </Row>
                              <Row style={{margin:"40px"}} >
                                <Col  >
                                  <Cbutton  Bcolor="success" clicked={this.onClickHandler.bind(this)} Bname="Validate"/>
                                  </Col>
                                  <Col  >
                                  <Link to="/Home"><Cbutton clicked={this.props.onClickHandler}  Bcolor="danger" Bname="Quit"/></Link>
                                </Col>
                              </Row>
                          </Container>
                        </Col>
                        </Row>

                      </div>
                    );
                  }
                  else if(this.props.status!==true) {
                    return (
                    <div>
                    <Row style={{margin:"100px"}}>
                      <Col  md={{offset:3 , size:6}} sm={{offset:3 , size:6}}>
                        <Container>
                            <Row>
                              <Col>
                                <h3> LOADING</h3>
                              </Col>
                            </Row>

                            <Row style={{margin:"40px"}} >
                              <Col  >
                                <Cbutton  Bcolor="success" Bname="Validate"/>
                                </Col>
                                <Col  >
                                <Cbutton   Bcolor="danger" Bname="Quit"/>
                              </Col>
                            </Row>
                        </Container>
                      </Col>
                      </Row>

                    </div>

                  );

                  }
                  else if (this.props.status=== true && this.props.ctr === 9) {
                    return(

                    <div>
                    <Row>
                      <Col md={{offset:3 , size:6}} sm={{offset:3 , size:6}} style={{ display: "flex",flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}  >
                        <Cheader nav1="Quiz" nav2="Home"/>
                      </Col>
                    </Row>
                    <Row style={{margin:"100px"}}>
                      <Col  md={{offset:3 , size:6}} sm={{offset:3 , size:6}}>
                        <Container>
                            <Row>
                              <Col>
                                <h3> Your final score is : {this.props.scre}/10</h3>
                              </Col>
                            </Row>

                        </Container>
                      </Col>
                      </Row>
                    </div>
                    )
                  }

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
              onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
              onStart:(data)=>dispatch({type:'LOAD',resp:data}),
              onClickHandler:()=>dispatch({type:"HOME"})
          };
      };

export default connect(mapStateToProps, mapDispatchToProps)(Cpanel);
