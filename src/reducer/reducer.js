const initialState={
  Quiz:[],
  counter:0,
  score:0,
  itemStatus:true,
  quizParam:["Theme","Difficulté"],

}
const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
      const updatedState={...state}


        updatedState.counter=state.counter+1


        return updatedState;
    }
    if (action.type === 'HOME') {
      const updatedState={...initialState}



        return updatedState;
    }
    if (action.type === 'LOAD') {

      const updatedState = {...state,status:true}
      if( updatedState.quizParam[1]==="Facile"){
      action.resp.map(data=>{

          updatedState.Quiz=data.débutant
      })
      console.log(updatedState.Quiz)
    }else if ( updatedState.quizParam[1]==="Moyen") {
      action.resp.map(data=>{

          updatedState.Quiz=data.confirmé
      })
    }else if ( updatedState.quizParam[1]==="Difficile") {
      action.resp.map(data=>{

          updatedState.Quiz=data.expert
      })
    }
      return updatedState
    }
    if (action.type === 'SCORE') {
      const updatedState = {...state}
      updatedState.counter=state.counter+1

      if(action.answer===action.correct ){

        updatedState.score=state.score+1



    }
    return updatedState
    }
    if (action.type === 'THEME') {
      const updatedState = {...state}
      updatedState.quizParam[0]=action.theme


    return updatedState
    }
    if (action.type === 'DIFFICULTY') {
      const updatedState = {...state}
      updatedState.quizParam[1]=action.difficulty


    return updatedState
    }
    if (action.type === 'VALIDATE') {
      console.log(state.quizParam)

    }
    return state;
};

export default reducer;
