import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>  
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

// As of S12 L124
// Passing undefined instead of just leaving it empty
export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// onSubmit is using reverse data flow (Section 4, lecture 37)
// By passing a method WITH argument from parent to child, child component can assing value to that method (in this case an expense object)
// Parent component can access those values by using the method's argument (in this case, argument is expense)