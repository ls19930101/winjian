import React,{PureComponent} from 'react';
import {InfoWrapper,
        Writer

} from '../style'; 
import {connect} from 'react-redux';

class Info extends PureComponent{
    render(){
      return (
          <InfoWrapper>
              <div>{this.props.info}</div>
              <Writer></Writer>
          </InfoWrapper>
      )
    }
}

 const mapStateToProps=(state)=>({
    info:state.getIn(['detail','info'])
})

export default connect(mapStateToProps,null)(Info);