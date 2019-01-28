import React,{PureComponent} from 'react';
import { WritersWrapper, WritersInfoTitle, WritersInfoSwitch, WritersInfoList, WritersInfoItem ,MoreWriter} from '../style';
import {connect} from 'react-redux';

class Writers extends PureComponent{
    render(){
        const {list}=this.props;
        return (
           <WritersWrapper>
               <WritersInfoTitle>
                   推荐作者
                    <WritersInfoSwitch>
                        <span className  ="iconfont">&#xe851;</span>
                        换一批
                    </WritersInfoSwitch>
               </WritersInfoTitle>
               <WritersInfoList>
                   {
                       list.map((item)=>{
                           return (
                                <WritersInfoItem key={item.get('id')}>
                                <img className="user" alt="" src={item.get('imgUrl')}/>
                                <a href="/detail" className="follow"> 
                                    <span className="iconfont">&#xe613;</span>
                                    关注
                                </a>
                                <a href="/detail" className="name">
                                {item.get('name')}
                                </a>
                                <p className="writerinfo">{item.get('info')}</p>
                              </WritersInfoItem>
                           )
                       })
                   }
               </WritersInfoList>   
               <MoreWriter>
                   查看全部
                   <span className="iconfont">&#xe658;</span>
                </MoreWriter>      
           </WritersWrapper>
        )
    }
}

const mapStateToprops=(state)=>({
    list:state.getIn(['home','writersList'])
})

export default connect(mapStateToprops)(Writers);