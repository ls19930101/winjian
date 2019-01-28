import {  put, takeEvery } from 'redux-saga/effects';
import {constants,actionCreators} from './index';
import axios from 'axios';


function* getDetailInfo(id){
    try{
        
       const res= yield axios.get('/api/detail.json?id='+id.id);
       const detail=res.data.data;
       const action=actionCreators.changeDetailInfo(detail);
        yield put(action);
    }catch(e){
        alert('网络异常，请重新获取');
    }
}


function* homeSaga(){
    yield takeEvery(constants.GET_DETAIL_INFO,getDetailInfo);
  
}


export default homeSaga;