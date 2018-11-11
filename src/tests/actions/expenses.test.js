import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk"
import { 
    startAddExpense, 
    addExpense, 
    editExpense, 
    startEditExpense ,   
    startRemoveExpense, 
    removeExpense, 
    setExpenses, 
    startSetExpenses,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

// beforeEach was done in S15 L157
// Since fixtures/expenses are in an array and Firebase can't store arrays,
// we need to convert them into nested objects
beforeEach((done) => {
    // Declaring empty object
    const expensesData = {};

    // Getting fixtures/expenses and assigning each array item to objects
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    });

    // Then add these objects into Firebase test database
    database.ref("expenses").set(expensesData).then(() => done());
});

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

// This was done in S15 L159
test("should remove expense from firebase", (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
        // After startRemoveExpense has removed the item, we will try to fetch that item,
        // if it returns null, we know it was removed
        // .toBeFalsy checks if it's a falsy value (which "null" will be)
        return database.ref(`expenses/${id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test("should setup edit expense action object", () => {
    const action = editExpense("123abc", { note: "New note value" });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: "New note value"
        }
    });
});

// This was done in S15 L160
test("should edit expense in Firebase", (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = { amount: 21045 };

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        });
        // After startEditExpense has made the changes, we will fetch that edited
        // item and check if its properties are what we expect them to be
        return database.ref(`expenses/${id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});

test("should setup add expense action object with provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test("should add expense to database and store", (done) => {
    // Creating a mock store, passing a default value inside parenthesis
    const store = createMockStore({});
    const expenseData = {
        description: "Mouse",
        amount: 3000,
        note: "This one is better",
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        // Get all the actions, returns an array of all the actions
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        // Getting the individual expense with given id (from Firebase)
        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
    });
});

test("should add expense with defaults to database and store", (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
    });
});

test("should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});

// This was done in S15 L158
test("should fetch the expenses from Firebase", (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();
    });
});