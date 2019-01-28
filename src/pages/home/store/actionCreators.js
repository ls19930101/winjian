import {constants} from './index';


export const getHomeInfo=()=>({
    type:constants.GET_HOME_INFO,
    // totalPage:Math.ceil(data.length/10)
})

export const changeHomeInfo=(result)=>({
    type:constants.CHANGE_HOME_INFO,
    articleList:result.articleList,
    recommendsList:result.recommendsList,
    writersList:result.writersList
})

export const loadMoreInfo=(page)=>({
    type:constants.LOAD_MORE_INFO,
    page,
    
})

export const changeMoreInfo=(list,nextPage)=>({
    type:constants.CHANGE_MORE_INFO,
    list:list.articleList,
    nextPage
})

export const toggleScrollTop=(show)=>({
    type:constants.SHOW_SCROLL_TOP,
    show
})

// axios.get('/api/home.json').then((res)=>{
//     const result=res.data.data;
//     // console.log(result);
//     const action={
//         type:'change_home_data',
//         articleList:result.articleList,
//         recommendsList:result.recommendsList,
//         writersList:result.writersList
//     }
//     // console.log(action);
//     this.props.changeHomeData(action);
// })