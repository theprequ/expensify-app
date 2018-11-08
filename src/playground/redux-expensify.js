import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = (
    { 
        description = "", 
        note = "", 
        amount = 0, 
        createdAt = 0 
    } = {}
    ) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE",
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});

// SET_START_DATE
// No need to set "undefined" as default since if there is no argument, it's going to be undefined anyways
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});


// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
             return state.filter(({ id }) => id !== action.id); // WAS before: state.filter((expense) => expense.id !== action.id); S10L93 bookmark
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, // First get the existing object values
                        ...action.updates // Then overwrite/update only the specified values
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // if typeof startDate/endDate is not a number -> evaluate them to true -> show all expenses regardless of the date
        // if typeof startDate/endDate is a number -> check if the current expense's createdAt value is bigger/smaller than startDate/endDate -> return true
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // if every three filters are evaluated as true, only then return the current expense
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1
        }
    })
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 300, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: "Coffeee", amount: 300, createdAt: -1010 }));
const expenseFour = store.dispatch(addExpense({ description: "Cooffeee", amount: 300, createdAt: -1010 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("ffe"));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate()); // should set to undefined
// store.dispatch(setEndDate(999));


const demoState = {
    expenses: [{
        id: "sdfdsf",
        description: "January Rent",
        note: "This was the final payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", // can be date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: "Jen",
    age: 24
};
