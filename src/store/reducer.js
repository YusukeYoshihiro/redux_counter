// const initialState = {
//     counter: 0
// };

// const reducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1
//         }
//     }
//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1
//         }
//     }
//     if (action.type === 'ADD') {
//         return {
//             counter: state.counter + 10
//         }
//     }
//     if (action.type === 'SUBTRACT') {
//         return {
//             counter: state.counter - 8
//         }
//     }
//     return state;
// };

// export default reducer;

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
// eslint-disable-next-line
    switch ( action.type ) {
        case 'INCREMENT':
            return {
                counter: state.counter +1
            }
        case 'DECREMENT':
            return {
                counter: state.counter -1
            }
        case 'ADD':
            return {
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                counter: state.counter - action.val
            }
    }
    return state;
};

export default reducer;