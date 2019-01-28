import React,{PureComponent} from 'react';
import {
    RecommendsWrapper,
    RecommendsItem,

} from '../style'
import {connect} from 'react-redux';

class Recommends extends PureComponent{
    render(){
        const {list}=this.props;
        return (
            <RecommendsWrapper>
                {list.map((item)=>{
                    return (
                        <RecommendsItem key={item.get('id')}>
                         <img className="chahua" alt="" src={item.get('imgUrl')}></img>
                        </RecommendsItem>
                    )
                })
            }
            </RecommendsWrapper>
        )
    }
}

const mapStateToprops=(state)=>({
    list:state.getIn(['home','recommendsList'])
})

export default connect(mapStateToprops,null)(Recommends);