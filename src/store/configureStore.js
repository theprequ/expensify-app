import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

// If we're using Redux devtools, we're going to use it. If not, we just use compose:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Export a function
// Inside the function we create a store, and return it
export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

// This was modified in S15 L152 to include thunk with Redux devtools