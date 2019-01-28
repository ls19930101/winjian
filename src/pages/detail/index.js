import React,{PureComponent} from 'react';
import Qrcode from './components/Qrcode';
import Info from './components/Info';
import {connect} from 'react-redux';
import { actionCreators } from '../detail/store';
 

class Detail extends PureComponent{
    
    render(){
        // console.log(this.props.match.params.id);
        return (
           <div>
                <Info/>
                <Qrcode/>
           </div>
        )
    }

    componentDidMount(){
        this.props.changeDetailData(this.props.match.params.id);
    }
}

const mapStateToProps=(state)=>({

})

const mapDispatchToProps=(dispatch)=>({
    changeDetailData(id){
        const action=actionCreators.getDetailInfo(id);
        dispatch(action);
    }
    

})

export default connect(mapStateToProps,mapDispatchToProps)(Detail);