export default (operation, index) => {
    return {
        type: 'updateFruit',
        payload: {
            operation,
            index
        }
    }
};