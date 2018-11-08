// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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