import React from 'react'
//Trying to make this components get state/information from redux -- import react-redux to connect to the store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import meatUpdate from '../actions/meatUpdate';

function meatSection(props) {

  function increment(operation, index) {
        props.meatUpdate(operation, index)
  };

  const goodsList = props.meat.map((item, i) => {
    return(
        <div key={i}>
            <div>{item.item}: {item.quantity}</div>
            <input type='button' onClick={() => {increment('+', i)}} value='+' />
            <input type='button' onClick={() => {increment('-', i)}} value='-'/>
        </div>
    )
});


  return (
    <div>
        <h1>The Meat Section</h1>
        {goodsList}
    </div>
  )
}


function mapStateToProps(state) {
    return {
        // any componet can have access to all the data store in redux, by adding in this function
        meat: state.meat
    };
};

function mapDispatchToProps(dispatch) {
    // bindActionCreators is a sipmlify function to forward all the arguments.
    return bindActionCreators({meatUpdate}, dispatch)
}

//After trying to conncet such component with redux store, the exported component will become the component being enhanced (after connect()());
//The connect funtion needs 2 neccesary arguments,
//  1. mapStateToProps: map a piece of redux state into the props of this component.
export default connect(mapStateToProps, mapDispatchToProps)(meatSection);