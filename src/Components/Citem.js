


import {Button,ListGroupItem} from 'reactstrap'
import React, {Component} from 'react'
import { connect } from 'react-redux';




    class Citem extends Component {



            render(){
              return(
                      <div>
                      <ListGroupItem  onClick={()=>this.props.onClickHandler(this.props.correct,this.props.item)}>
                            {this.props.item}
                      </ListGroupItem>
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
      const mapDispatchToProps = dispatch => {
          return {
              onClickHandler: (corr,ans) => dispatch({type: 'SCORE',correct:corr,answer:ans,itemStatus:true}),
          };
      };
export default connect(mapStateToProps,mapDispatchToProps)(Citem);
