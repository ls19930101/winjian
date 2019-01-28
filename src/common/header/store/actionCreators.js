import {constants} from './index';
import {fromJS} from 'immutable';

export const getSearchFocused=()=>({
     type:constants.SET_FOCUSED,
})


export const getSearchBlur=()=>({
     type:constants.SET_BLUR,
})

export const getList=()=>({
     type:constants.GET_LIST,
})

export const changeList=(data)=>({
     type:constants.CHANGE_LIST,
     data:fromJS(data),
     totalPage:Math.ceil(data.length/10)
})

export const getMouthIn=()=>({
     type:constants.GET_MOUTH_IN,
})

export const getMouthLeave=()=>({
     type:constants.GET_MOUTH_LEAVE,
})

export const getPageChange=(page)=>({
     type:constants.GET_PAGE_CHANGE,
     page
})






// thunk的使用
// export const getList=()=>{
//         return (dispatch)=>{
//                 axios.get('api/headerList.json').then((res)=>{
//                       const data=res.data;
//                         // console.log(data.data);
//                         dispatch(changeList(data.data));
//         })
// }
// }