//A single reducer has two params: 
//  1. Current State (usually provide default state); 
//  2. Information from any action: payload.

const stock = [
    {
        item: 'pizza',
        quantity: 10,
    },
    {
        item: 'dumpling',
        quantity: 20,
    },
    {
        item: 'bun',
        quantity: 30,
    }
];


export default (state=stock, action) => {
    if (action.type === 'updateFrozen') {
        const newState = JSON.parse(JSON.stringify(state));
        if (action.payload.operation === '+') {
            newState[action.payload.index].quantity++
            console.log(newState);
            console.log(state);
        } else if (action.payload.operation === '-') {
            newState[action.payload.index].quantity--
        }
        return newState;
    } else {
        return state;
    }
}