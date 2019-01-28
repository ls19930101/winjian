import {fromJS} from 'immutable'
import { constants } from './';


const defaultState =fromJS({
  info:["111"]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_DETAIL_INFO:
      return state.merge({
        info:fromJS(action.info)
      })
   
       default:
       return state;
    }
    
}
