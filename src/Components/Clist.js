


import {Button,ListGroup} from 'reactstrap'
import React, {Component} from 'react'
import Citem from './Citem'

import { connect } from 'react-redux';



class Clist extends Component {

  state={
    score:0
  }


            render(){
            const answers = this.props.answers
            const items = answers.map(answer=>{
              return (
                <Citem  correct={this.props.correct} key={answer} item={answer} />
              )
            })
                    return(
                      <div>
                      <ListGroup>
                      {items}

                      </ListGroup>
                      </div>
                    );
            }
      }
      const mapStateToProps = state => {
          return {
              ctr: state.counter,
              qz:state.Quiz,
              status:state.status,
              scre:state.score
          };
      };


export default connect(mapStateToProps)(Clist);
