REDUX
    https://redux.js.org
    - state management JavaScript library which allows to track changing data

ISTALLING LOCALLY
    yarn add redux@3.7.2

REDUX DEV TOOLS
    https://github.com/zalmoxisus/redux-devtools-extension
    - in order for the store to actually show up in the dev tool, we need to modify our store creation function http://prntscr.com/ley59c
    - this code can be found from the github link

IMPORTING (section 10 lecture 85)
    TO CREATE A STORE
#   import { createStore } from "redux";

CREATING STORE (section 10 lecture 85)
    - variable equal to createStore() function, the function itself expects a reducer function as its first argument (reducer funtion: https://prnt.sc/ldx48z)
    - this inner function takes "state" as its first argument for CURRENT STATE (much like "prevState" in setState() function)
    - "state" argument takes default value if there is no current state available: state = { key: value }
    - the second argument of the inner function is "action", which will be used when we pass and action object to it (is explained later)

    EXAMPLE OF CREATING STORE
#       const store = createStore((state = { count: 0 }, action) => {
#           return state;
#       });

    METHODS OF STORE
        Returns the current state objects
#       .getState() 

ACTIONS
    - action is an object that gets sent to the store
    - this object must always have a type

    EXAMPLE OF AN ACTION OBJECT:
        { type: "TYPENAME" }

    USING ACTIONS
        - when dispatching an action, it gets passed to the store variable as the second argument https://prnt.sc/ldvko8
        - we can call the store with an action by .dispatch(); method. Object action is inside the method:
#       .dispatch({type: "TYPENAME" })
        - now the store variable can use this action via the "action" argument, for example: https://prnt.sc/ldvlwe
        - ^^ instead of using if-statements, it's common to use switch-statement: https://prnt.sc/ldvmic

    DISPATCHING DYNAMIC INFORMATION
        - (Section 10, lecture 87 bookmark)

    DISPATCHING ACTIONS THAT HAVE REQUIRED TYPES
        - (Section 10, lecture 87 bookmark)
        - simply done by not checking if they exists (in store function)

    ACTION GENERATORS
        - (Section 10, lecture 90)
        - action generators returns action objects
        - action generators' are meant to be simple functions which takes input and returns the new action object

WATCHING FOR CHANGES
#   .subscribe();
    - ^^ expects a function inside. This .subscribe method gets called every time a change is made in the store
    - return value for subscribe is a function for unsubscribing. We can do it by using .subscribe in variable
#   - ^^ EXAMPLE: const unsubscribe = store.subscribe(() => { // do something }; and when we want to unsubscribe, we use unsubscribe();
    - ^^ https://prnt.sc/ldvqgu (this much like with setInterval when we want to cancel it)

# FULL USAGE OF STORE, REDUCER FUNCTION, ACTIONS AND ACTION GENERATORS AS PER AFTER SECTION 10, LECTURE 91:
#   CREATE A REDUCER FUNCTION
        - reducer function is a PURE function assigned to a variable 
        - reducer function can have two arguments: state and action (https://prnt.sc/ldx7lf)
            - state is an object of the current state which will be shown when the function is ran first time (https://prnt.sc/ldx7wz)
                - if multiple state values, they could be passed as a variable (https://prnt.sc/ldxiw8)
            - action is passed by action generator
        - we can use switch-statement to fetch the action what is passed by action argument (action.type)
        - finished storage function: https://prnt.sc/ldx79o

#   CREATE A STORAGE
        - create a storage by createStore() function assigned to a variable
        - inside createStore(), use the reducer function which was defined earlier (https://prnt.sc/ldx8hs)

#   CREATE ACTION GENERATORS
        - action generator can be a function in a named variable
        - action generator returns an object which will be passed to storage
        - if the action can take a user defined value, it will be passed as an destructured object in arguments (https://prnt.sc/ldx0mr)
            - if the value is not necessarily required, it should have a default value defined (https://prnt.sc/ldx0v2)
        - if the action can take a user defined value, it should have an default value of EMPTY OBJECT defined as well (https://prnt.sc/ldx11s)
        - ^^^^ default value for the action object AND for the values inside that action object (https://prnt.sc/ldx1xa)
        - inside the action function object:
            - it's required to have a type set (https://prnt.sc/ldx2cq)
            - if the action can have a value, it should be specified inside the function as well
            - it's possible to use shorthand version: "keyName: keyName" can be put as "keyName" (https://prnt.sc/ldx2cq)
        - different versions of action generators: https://prnt.sc/ldx00n

#   PASSING ACTION VIA ACTION GENERATOR TO STORAGE
        - is done with the storeVarName.dispatch() method
        - inside .dispatch(), we pass the action generator as an argument
            - if action generator can have a user defined value, it will be passed as an object inside the action generator
        - different versions of dispatched actions: https://prnt.sc/ldx3is

COMBINING REDUCERS
    - Section 10, lecture 92
    - Section 10, lecture 93
    - lets us combine multiple reducers to create a single store
    - we still use createStore() to create the store
        - inside createStore(), we will pass a function called combineReducers()
            - inside combineReducers(), we will pass an object of those reducer functions
    - finished combined store variable: https://prnt.sc/ldxjo9

    IMPORTING
        - import { combineReducers } from "redux";

# USING REDUX IN REACT PROJECT (EXAMPLE OF FOLDER / FILE STRUCTURE / DEPENCIES)
#   actions
        - for action generators
        - action generators are responsible for receiving user's action and passing it to reducer function
        - imports: none
        - exports: named functions (can have several)
#   reducers
        - for reducer functions
        - reducer functions are responsible for receiving an action from action generator and performing the desired action to the state
        - imports: none
        - exports: default function
#   selectors
        - for selectors
        - they're responsible for outputting the desired result
        - imports: none
        - exports: default function if only one 
#   store
        - for store
        - imports: reducers from self-made reducers
        - imports: createStore (, combineReducers) from "redux"

# EXAMPLES
#   Creating a store
        - imports: configureStore from "store/configureStore"
        - const store = configureStore()

#   Getting the state of a store
        - store.getState()
        - this could be stored in a variable or logged into console
    
#   (Un)subscribing for changes
        - store.subscribe();
        - store.unsubscribe();
#       OR
        - store.subscribe(() => { // do something every time state changes });

#   Modifying state with action generator
        - imports: { addExpense, editExpense, removeExpense } from "actions/expenses"
        - principle: storeName.dispatch(generatorName( // object, string etc. //));
        - store.dispatch(addExpense({ description: "New Expense", amount: 500 }));
        - store.dispatch(editExpense(7, { description: "New description" })); ////////////// 7 is for the id
        - store.dispatch(removeExpense({ id: 7 }));

#   Displaying the state
        - imports: getVisibleExpenses from "selectors/expenses"
        - getVisibleExpenses(state.expenses, state.filters);
        - this could be stored in a variable or logged into console

# REACT-REDUX LIBRARY (section 11, lecture 101)
    https://github.com/reduxjs/react-redux
    - installing locally: yarn add react-redux@5.0.5

    PROVIDER
        - provider allows us to provide the store to all of the components that make up our application
        - means that we don't manually need to pass the store around, instead: individual components that wants to access the store, can just access it
        - importing: import { Provider } from "react-redux"
        - usage: the component you want to have access to the store needs to be inside <Provider> tags. Store needs to be passed as a prop to the Provider tags.
            - EXAMPLE: <Provider store={storeName}><AppRouter /></Provider>
            - https://prnt.sc/le9m7q

    CONNECT
        - can't be used unless Provider is also set up
        - importing: import { connect } from "react-redux"
        - we create HOC components using the connect function
        - https://prnt.sc/lea3zb


BOOKMARKS TO CHECK
dispatches for input, button, select
controlled input
