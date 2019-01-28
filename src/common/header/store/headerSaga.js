import {  put, takeEvery } from 'redux-saga/effects';
import {constants,actionCreators} from './index';

import axios from 'axios';

function* getList(action){
    try{
       const res= yield axios.get('/api/headerList.json');
       const data=res.data;
      const action=actionCreators.changeList(data.data);
        yield put(action);
    }catch(e){
        console.log('网络异常，请重新获取');
    }
}

function* headerSaga(){
    yield takeEvery(constants.GET_LIST,getList)
}


export default headerSaga;