import React,{PureComponent} from 'react';
import {HomeWrapper,
        HomeLeft,
        HomeRight, 
        BackTop,   
    } from './style';
import {connect} from 'react-redux';
import List from './components/List';
import Recommends from './components/Recommends';
import Writers from './components/Writers';
import Download from './components/Download';
import {actionCreators} from './store';

class Home extends PureComponent{
    render(){
        const {handleScrollTop,showScrollTop}=this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4606/5d7f5855af24cb8cd161f37d9f9af47342714f34.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommends/>
                    <Download/>
                    <Writers/>
                </HomeRight>
                {
                    showScrollTop? <BackTop onClick={()=>handleScrollTop(showScrollTop)}>顶部</BackTop>:null
                }
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        window.addEventListener('scroll',this.props.changeScrollTop);
    }
}


const mapStateToProps=(state)=>({
    showScrollTop:state.getIn(['home','showScrollTop'])
})

const mapDispatchToProps=(dispatch)=>({
    changeHomeData(){
        const action=actionCreators.getHomeInfo();
        dispatch(action);
    },

    changeScrollTop(showScrollTop){
      if(document.documentElement.scrollTop >200){
           showScrollTop=true;
           const action=actionCreators.toggleScrollTop(showScrollTop);
           dispatch(action);
       }
       else{
          
           showScrollTop=false;
           const action=actionCreators.toggleScrollTop(showScrollTop);
           dispatch(action);
       }
    },

    handleScrollTop(){
        document.documentElement.scrollTop=0;
    }
    })
    

export default connect(mapStateToProps,mapDispatchToProps)(Home);