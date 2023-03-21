import React from 'react'
//Trying to make this components get state/information from redux -- import react-redux to connect to the store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fruitsUpdate from '../actions/fruitsUpdate';

function fruitSection(props) {
    
  function increment(operation, index) {
    props.fruitsUpdate(operation, index);
  };

  const goodsList = props.fruits.map((fruit, i) => {
    return(
        <div key={i}>
            <div>{fruit.item}: {fruit.quantity}</div>
            <input type='button' onClick={() => {increment('+', i)}} value='+' />
            <input type='button' onClick={() => {increment('-', i)}} value='-'/>
        </div>
    )
  });

  return (
    <div>
        <h1>The Fruit Section</h1>
        {goodsList}
    </div>
  );
}


function mapStateToProps(state) {
    // argument state -> rootReducer(reducers set in configureStore)
    // return an object, 
    //  with the key is the local name that will be added to props of this component; 
    //  and the value is the corresponding piece of state in redux.
    return {
        fruits: state.fruit,
    };
};

function mapDispatchToProps(dispatch) {
  // bindActionCreators is a sipmlify function to forward all the arguments.
  return bindActionCreators({fruitsUpdate}, dispatch)
}

//After trying to conncet such component with redux store, the exported component will become the component being enhanced (after connect()());
//The connect funtion needs 2 neccesary arguments,
//  1. mapStateToProps: map a piece of redux state into the props of this component.
export default connect(mapStateToProps, mapDispatchToProps)(fruitSection);