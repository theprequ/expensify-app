import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../actions/expenses";

// This component was changed to class based component in:
// Section 12, Lecture 125
export class EditExpensePage extends React.Component {
    // (expense) comes from ExpenseForm by using reverse data flow
    onSubmit = (expense) => {
        // inside editExpense: this.props.expense.id is an actual prop key
        // inside editExpense: expense comes from ExpenseForm
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} 
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

// Below code "adds" editExpense and startRemoveExpense to props
// Now, "this.props" will include editExpense and startRemoveExpense actions and
// bunch of other methods related to normal props
// http://prntscr.com/lfnq9e
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
