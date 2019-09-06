import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

import { connect } from 'dva';
import './index.scss';
class Counter extends Component {
	constructor(props) {
      super(props);
  }

  componentWillMount(){
  }
  componentDidMount(){
  
  }
  componentWillUnmount(){
    
  }

  render() {
      let {onMinusClick,value,onIncreaseClick,onAsyncIncreaseClick} = this.props;
      return (
          <div className='main-wrap'>
            <p>{value}</p>
            <button onClick={onIncreaseClick}>+</button>
            <button onClick={onMinusClick}>-</button>

            <button onClick={onAsyncIncreaseClick}>异步+</button>    
          </div>
      );
  }
}


function mapStateToProps(state){
  return state.counter;
}
// Action Creator
const increaseAction = { type: 'counter/add' }
const minusAction = { type: 'counter/minus' }
const asyncIncreaseAction = {type:'counter/asyncAdd'}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onMinusClick: () => dispatch(minusAction),
    onAsyncIncreaseClick: () => dispatch(asyncIncreaseAction)
  }
}

let CounterWrapComponent = connect(mapStateToProps,mapDispatchToProps)(Counter)
export default CounterWrapComponent;