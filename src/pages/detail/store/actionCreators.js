import {constants} from './';
 
export const getDetailInfo=(id)=>({
 type:constants.GET_DETAIL_INFO,
 id
})

export const changeDetailInfo=(detailNews)=>({
    type:constants.CHANGE_DETAIL_INFO,
    info:detailNews.info
})