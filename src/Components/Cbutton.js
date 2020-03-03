import {Button} from 'reactstrap'
import React, {Component} from 'react'




    class Cbutton extends Component {
            render(){
                    return(
                      <div>
                        <Button onClick={this.props.clicked} color={this.props.Bcolor}>{this.props.Bname}</Button>
                      </div>
                    );
            }
      }

export default Cbutton;
