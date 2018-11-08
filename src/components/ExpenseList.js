import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

// Normal stataless component
// This is exported only for testing purposes
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }
    </div>
);

// Normal JavaScript function
// Here we define the things we want to get from the store
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// here (ExpenseList) is the component where we want the state to be shown
export default connect(mapStateToProps)(ExpenseList);