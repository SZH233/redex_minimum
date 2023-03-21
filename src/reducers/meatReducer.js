const stock = [
    {
        item: 'beef',
        quantity: 91,
    },
    {
        item: 'pork',
        quantity: 51,
    },
    {
        item: 'chicken',
        quantity: 34,
    }
];


export default (state=stock, action) => {
    if (action.type === 'updateMeat') {
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