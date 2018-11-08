import { createStore, bindActionCreators } from "redux";

// If "payload" doesn't exist, it's default value will be an empty object

// First we pass an destructured object asn an argument to the unction
// This object has an key which defaults to 1 if it is empty
// If there isn't any destructured object passed, it defaults to an empty object
// ^^ explained in Section 10, lecture 90

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

// No default value needed for setCount's count since a value is required when using this dispatch
const setCount = ({ count }) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

// Reducers
// 1. Reducers are pure functions 
//      ^^pure function = output is only determined by the input, so it doesn't use anything outside the function, nor does change anything outside the function
// 2. Never change state or action (we only return the object which represents the new state)

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: action.count
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
   console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));