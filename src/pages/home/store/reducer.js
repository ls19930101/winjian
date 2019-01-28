import {fromJS} from 'immutable'
import { constants } from './';

const defaultState =fromJS({
    articleList:[],
    recommendsList:[],
    writersList:[],
    articlePage:0,
    showScrollTop:false,
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_INFO:
         return  state.merge({
            articleList:fromJS(action.articleList),
            recommendsList:fromJS(action.recommendsList),
            writersList:fromJS(action.writersList)
         }
        )
        
        case constants.CHANGE_MORE_INFO:
      
        return state.merge({
            articleList:state.get('articleList').concat(fromJS(action.list)),
            articlePage:action.nextPage
        })

        case constants.SHOW_SCROLL_TOP:
        return state.set('showScrollTop',action.show)
       
       default:
       return state;
    }
    
}