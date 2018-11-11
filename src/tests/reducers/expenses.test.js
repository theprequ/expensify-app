import expensesReducers from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducers(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test("should not remove expenses if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -1
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const expense = {
        id: "4",
        description: "Electricity",
        note: "",
        amount: 1500,
        createdAt: 0
    };
    const action = { type: "ADD_EXPENSE", expense };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
    const amount = 122000;
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test("should not edit expense if id not found", () => {
    const amount = 122000;
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            amount
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

// Below test was made in S15 L157
test("should set expenses", () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[1]]);
});