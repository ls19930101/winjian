import React,{PureComponent} from 'react';
import {
        ListItem,
        ListInfo,
        ListLine,
        ListAciton,
        LoadMore
} from '../style';
import {connect} from 'react-redux';
import { actionCreators } from '../store';
import {Link} from 'react-router-dom';


class List extends PureComponent{
    render(){
        // console.log(this.props);
        const {list,handleLoadMore,page}=this.props;
        return (
            <div>    
                <ListLine/>
                {
                    list.map((item,index)=>{
                       return(
                     
                            <ListItem >
                                <img 
                                    className="pic" 
                                    alt= "" 
                                    src={item.get('imgUrl')}
                                />
                                <ListInfo>
                                     <Link className="title"  key={index} to={'/detail/'+item.get('id')}>{item.get('title')}</Link>
                                    <p className="desc">{item.get('desc')}</p>
                                    <ListAciton>
                                    <Link className="action" to="/">{item.get('writer')}</Link>
                                    <Link className="action" to="/detail"><span className="iconfont">&#xe684;</span>{item.get('commend')}</Link>
                                    <span className="action"><span className="iconfont">&#xe65c;</span>{item.get('praise')}</span>
                                    </ListAciton>
                                </ListInfo>
                             </ListItem>
                      
                    
                       ) 
                    })
                }
                <LoadMore onClick={()=>handleLoadMore(page)}>阅读更多</LoadMore>
            </div>
            
        )
    }
}

const mapStateToProps=(state)=>({
    list:state.getIn(['home','articleList']),
   page:state.getIn(['home','articlePage'])
})

const mapDispatchToProps=(dispatch)=>({
        handleLoadMore(page){
            const action=actionCreators.loadMoreInfo(page);
            // console.log(page);
            dispatch(action);
        }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);