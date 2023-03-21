import React from 'react'
//Trying to make this components get state/information from redux -- import react-redux to connect to the store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import frozenUpdate from '../actions/frozenUpdate';

function frozenSection(props) {

  function increment(operation, index) {
    props.frozenUpdate(operation, index);
  };

  const goodsList = props.frozenGoods.map((frozenGood, i) => {
        return (
            <div key={i}>
                <div>{frozenGood.item}: {frozenGood.quantity}</div>
                <input type='button' onClick={() => {increment('+', i)}} value='+' />
                <input type='button' onClick={() => {increment('-', i)}} value='-'/>
            </div>
        )
  });

  return (
    <div>
        <h1>The Frozen Food Section</h1>
        {goodsList}
    </div>
  );
}

// corresponds to (5.) in index.js
function mapStateToProps(state) {
    // argument state -> rootReducer(reducers set in configureStore)
    // return an object, 
    //  with the key is the local name that will be added to props of this component; 
    //  and the value is the corresponding piece of state in redux.
    return {
        // fronzenGoods can be called by props.frozenGoods.
        frozenGoods: state.frozen,
        // any componet can have access to all the data store in redux, by adding in this function
        meat: state.meat
    };
};

// Use mapDispatchToProps to combine this component with DISPATCH
// By using this, actions created by action creators will automatically bind with dispatch methods and save into the component's properties
// when calling them, they'll send to all the reducers. 
// corresponds to (5.) in index.js
function mapDispatchToProps(dispatch) {
    // bindActionCreators is a sipmlify function to forward all the arguments.
    return bindActionCreators({frozenUpdate}, dispatch)
}

//After trying to conncet such component with redux store, the exported component will become the component being enhanced (after connect()());
//The connect funtion needs 2 neccesary arguments,
//  1. mapStateToProps: map a piece of redux state into the props of this component.
export default connect(mapStateToProps, mapDispatchToProps)(frozenSection);

//This is just the function helping understand how conncet()() works
function x(n) {
    return (m) => {
        console.log(n+m);
    };
}
// x(1)(2)