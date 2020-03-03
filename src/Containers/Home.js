import React,{Component} from 'react'
import Cheader from '../Components/Cheader'
import Cselect from '../Components/Cselect'
import {Row,Col} from 'reactstrap'
import Cbutton from '../Components/Cbutton'
import { connect } from 'react-redux';
import { Route,Link } from 'react-router-dom'


class Home extends Component {
    render(){
          return(
            <div>
            <Row>
              <Col md={{offset:3 , size:6}} sm={{offset:3 , size:6}} style={{ display: "flex",flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}  >
                <Cheader nav1="Home"/>
              </Col>
            </Row>
            <Row>
              <Col md={{offset:3 , size:6}} sm={{offset:3 , size:6}} style={{ marginTop:"50px",display: "flex",flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}  >
                  <h4>Veuillez choisir un theme :</h4>
                  <Cselect type={this.props.qzP[0]} clicked={this.props.onClickHandler1} options={["Chanteurs internationaux","Chocolats","Séries americaines","Marques, logos et slogans","Marvel heroes"]} style={{margin:"20px"}}/>
              </Col>
              <Col md={{offset:3 , size:6}} sm={{offset:3 , size:6}} style={{ marginTop:"50px",display: "flex",flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}  >
                  <h4>Veuillez choisir une difficulté :</h4>
                  <Cselect clicked={this.props.onClickHandler2} type={this.props.qzP[1]} options={["Facile","Moyen","Difficile"]} style={{margin :"20px"}}/>
              </Col>
            </Row>
            <Row>
              <Col md={{offset:3 , size:6}} sm={{offset:3 , size:6}} style={{ marginTop:"50px",display: "flex",flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}  >
              <Link to="/Quiz">  <Cbutton Bname="valider" Bcolor="success" clicked={this.props.onClickHandler}/></Link>
              </Col>
            </Row>

            </div>
          )
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
      onClickHandler:()=>dispatch({type:"VALIDATE"}),
      onClickHandler1: (option) => dispatch({type: 'THEME',theme:option}),
      onClickHandler2: (option) => dispatch({type: 'DIFFICULTY',difficulty:option}),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);
