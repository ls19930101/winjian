import {constants} from './index';
import {fromJS} from 'immutable'


const defaultState =fromJS({
    focused:false,
    mouthIn:false,
    list:[],
    page:1,
    totalPage:1,
    
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.SET_FOCUSED: 
            return state.set('focused',true);
        case constants.SET_BLUR:   
            return state.set('focused',false);
        case constants.CHANGE_LIST: 
            return state.merge({
                'list':action.data,
                'totalPage':action.totalPage
            })
        case constants.GET_MOUTH_IN:
            return state.set('mouthIn',true);
        case constants.GET_MOUTH_LEAVE:
            return state.set('mouthIn',false);
        case constants.GET_PAGE_CHANGE:
            return state.set('page',action.page);
       default:
       return state;
    }
    
}