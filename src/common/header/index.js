import React ,{PureComponent} from 'react';
import {HeaderWrapper,
        Logo,
        Nav,
        NavItem,
        NavSearch,
        Addition,
        Button,
        SearchWrapper,
        SearchInfo,
        SearchInfoTitle,
        SearchInfoSwitch,
        SearchInfoList,
        SearchInfoItem,
        } from './style';
import { IconGlobal } from '../../statics/iconfont/iconfont';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {Link} from 'react-router-dom';

class Header extends PureComponent{

    getListArea(){
        const {focused,list,mouthIn,handMouthIn,handMouthLeave,handlePageChange,page,totalPage}=this.props;
        const newlist=list.toJS();
        const pageList=[];
        if(newlist.length){
            for(let i=(page-1)*10;i<page*10;i++){
                pageList.push(
                <SearchInfoItem key={newlist[i]}>{newlist[i]}</SearchInfoItem>
                )
            }
        }
        
        if(focused||mouthIn){
            return (
            <SearchInfo 
            onMouseEnter={handMouthIn}
            onMouseLeave={handMouthLeave} 
            >
                <SearchInfoTitle>热门搜索
                <SearchInfoSwitch onClick={()=>handlePageChange(page,totalPage)}>
                <span className  ="iconfont">&#xe851;</span>
                换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                  {pageList}   
                </SearchInfoList>
            </SearchInfo>
            )
        }
        else {return null}
    }

    render(){
        const {focused,handleSearchBlur,HandleSearchFocus,list} =this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                <Logo/> 
                </Link>
                 <Nav>
                    <IconGlobal/>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        <NavItem className='right'><span className  ="iconfont">&#xe636;</span></NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <SearchWrapper>
                        <CSSTransition
                        in={focused}
                        timeout={300}
                        classNames="slide" 
                        >
                            <NavSearch className={focused? 'focused':''}
                            onFocus={()=>HandleSearchFocus(list)}
                            onBlur={handleSearchBlur}
                            >
                            </NavSearch>
                            </CSSTransition>
                            <span className ={focused? 'focused iconfont zoom' :'iconfont zoom'}>&#xe60b;</span>
                            {this.getListArea(focused)}
                        </SearchWrapper>
                 </Nav>
                 <Addition>
                     <Button className='writting'><span className  ="iconfont">&#xe615;</span>写文章</Button>
                     <Button className='reg'>注册</Button>
                 </Addition>
            </HeaderWrapper>
        )
    }
} 


const mapStateToProps=(state)=>{
    return{
      focused:state.getIn(['header','focused']),
      list:state.getIn(['header','list']),
      mouthIn:state.getIn(['header','mouthIn']),
      page:state.getIn(['header','page']),
      totalPage:state.getIn(['header','totalPage']),
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        HandleSearchFocus(list){
            dispatch(actionCreators.getSearchFocused()); 
            if(list.size===0){
                dispatch(actionCreators.getList());
            } 
        },
            
        handleSearchBlur(){
            dispatch(actionCreators.getSearchBlur());
        },

        handMouthIn(){
            dispatch(actionCreators.getMouthIn())
        },

        handMouthLeave(){
            dispatch(actionCreators.getMouthLeave())
        },
        
        handlePageChange(page,totalPage){
            if(page<totalPage){
                dispatch(actionCreators.getPageChange(page+1))
                
            }
            else {
                dispatch(actionCreators.getPageChange(1))
            }
           
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);