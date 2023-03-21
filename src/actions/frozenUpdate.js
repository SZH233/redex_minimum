// it's a basic action creator;
// action creator return actions, which is an object has at least a property of type
// hand the action creator to the dispatch


export default (operation, index) => {
    return {
        type: 'updateFrozen',
        payload: {
            operation,
            index
        }
    }
};