import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button>Store Result</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 10}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', val:15})
    }
};

// (higher-order component; HOC) 
// 高階コンポーネント (higher-order component; HOC) はコンポーネントのロジックを再利用するための React における応用テクニックです。HOC それ自体は React の API の一部ではありません。HOC は、React のコンポジションの性質から生まれる設計パターンです。
// 具体的には、高階コンポーネントとは、あるコンポーネントを受け取って新規のコンポーネントを返すような関数です。
export default connect(mapStateToProps, mapDispatchToProps)(Counter);