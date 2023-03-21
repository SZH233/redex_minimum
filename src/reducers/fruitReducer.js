const stock = [
    {
        item: 'apple',
        quantity: 21,
    },
    {
        item: 'pear',
        quantity: 42,
    },
    {
        item: 'orange',
        quantity: 33,
    }
];


export default (state=stock, action) => {

    if (action.type === 'updateFruit') {
        const newState = JSON.parse(JSON.stringify(state));
        if (action.payload.operation === '+') {
            newState[action.payload.index].quantity++;
        } else if (action.payload.operation === '-') {
            newState[action.payload.index].quantity--;
        }
        return newState;
    } else {
        return state;
    }
}