#   INPUT TEXT (S11 L103)
        - it's important that the input always matches with the current text value on the Redux store
        - so, if the the store value changes via .dispatch call, we want to read it and show it in the input
            - this can be achieved with Redux connect (HOC):
            - normal JavaScript function which returns the state (http://prntscr.com/leook8)
#               const mapStateToProps = (state) => { return { key: value }; };
            - calling connect (and possibly export it (see screenshot in the end) ):
#               connect(mapStateToProps)(ComponentName);
            - now the component's props have access to the state via props.key
        - using input tags:
#       <input type="text" value={} onChange={} />
            - input should get its value from the Redux store
            - onChange should launch a dispatch call to the store
            - EXAMPLE INPUT <input type="text" value={props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }} />
            http://prntscr.com/leopzh
            - NOTE: without calling connect (Redux), you don't have access to dispatch

#   BUTTONS (S11 L103)
        - we need to use connect in order to use dispatch
        - we DO NOT need to access the state, so we don't have to use a function inside the connect call:
            connect()(ComponentName);
        - EXAMPLE BUTTON:
#              <button onClick={() => { props.dispatch(doSomething) }}>Button text</button>
        http://prntscr.com/leov7s

#   SELECT DROPDOWN (S11 L104)
        - similar to text input
        - value of SELECT needs to come from Redux store
        - value of OPTION can be targeted in SELECT with "e.target.value"
        - onChange should launch .dispatch call to the Redux store
        - EXAMPLE SELECT:
#           <select value={value from store} onChange={(e) => { possibly conditional logic with .dispatch, OPTION's value could be accessed via e.target.value }}>
#               <option value="exampleOne">One</option>
#               <option value="exampleTwo">Two</option>
#           </select>
        http://prntscr.com/lep2m8

#   OTHER INFO REGARDING FORMS (S11 L104)
    - when calling connect, we can use .dispatch as a prop
    - if we're destructuring arguments, we need to put dispatch there as well, EXAMPLE: http://prntscr.com/leouf7
#   SECTION 12 LECTURE 124:
        - connect() can also have other arguments than "mapStateToProps" variable, for example "mapDispatchToProps":
                const mapDispatchToProps = (dispatch) => ({
                    onSubmit: (expense) => dispatch(addExpense(expense))
                })
        - if we don't need to use mapStateToProps, but we need to use mapDispatchToProps, we can set the former to undefined:
                connect(undefined, mapDispatchToProps)

#       CONTROLLED INPUT
            - controlled input is an input where the VALUE is controlled by JavaScript

# ACTUAL RE-USABLE FORM WITH <form> TAGS (S11 L105, L106, L107, L108)
    - goal is to have a form which can be re-used as a component (for example have the same form component used when adding and editing data)
    - goal is to use local component state to track the changes of all of the inputs
    - only when the user actually submits the form (for example by pressing a button), we will do something with the information
    - basic idea is:
        1. with local component state, keep track of form information
        2. when submitting the form, send the form information to Redux
    - basically, each time a change is made in an input field -> the same change will be made in the component state

#   CLASS COMPONENT
        - contains state
        - if form is used (ie.) adding and editing the same database item, state has have a default value BASED on if user is adding a new item or editing existing one
            - this needs to have a constructor inside the class component
                - constructor needs a super(props) keyword
            - this.state = {} needs to be inside constructor
            - if needed, each individual state key:value pair should have a 'ternary if' to decide the default value (for adding a new item / editing existing item)
            - state: https://prnt.sc/leyg2x
                - ternary if: if there is existing data ? use the existing data : else use empty string

#   FORM TAGS
        - as usual: contains onSubmit={}

#   SUBMITTING (CONTAINS REVERSE DATA FLOW)
        - onSubmit method should have .prevenDefault();
        - IMPORTANT: the component (=parent) which uses this form component (=child) needs to pass a method with argument to the child component
#           EXAMPLE:
                - parent declares a onSubmit method with an argument of item: onSubmit = (item) => { props.dispatch(addNewItem(item)) }
                - parent passes this method as a prop to the child component
                - child (form component) uses this method inside its own onSubmit method: this.props.onSubmit({ key:value })
                - now the parent's method's argument contains those key:value pairs and the parent can use it to dispatch an action via action generator
                - form component (child) https://prnt.sc/leyp9i
                - parent component https://prnt.sc/leypx8

#   ERROR MESSAGES
        - simply using key:value in the state, value being the error message. Error message should be an empty string by default
        - onSubmit method could have an if statement to modify the error message via .setState()
            - if error -> this.setState({ error: "error message" })
            - else -> this.setState({ error: "" }) and submit form

#   INPUTS (AS CONTROLLED INPUT) [inputs, selects, textareas etc.]
        - value from state
        - onChange function to set the state every time value changes in input

#   DATA VALIDATION
        - can be done inside a onChange method https://prnt.sc/leyi9m

#   3RD PARTY DATEPICKER
        - S11 L106
        - S11 L110
        - selectors/expenses.js before datepicker https://prnt.sc/lez4t5

#   REDIRECTING AFTER FORM SUBMIT
        - inside the parent component, we can use props.history.push("url") to make a redirect without page reload

#   EDITING EXISTING KEY:VALUE PAIRS
        - we use connect call
        - we do need to access the state, so we need a mapStateToProps() function
            - this function has two arguments: state and props
            - it returns the object we wish to edit by using .find()
            - https://prnt.sc/leyvh8

    - class component's state object: https://prnt.sc/leyg2x
    - contents of form tags https://prnt.sc/leyfpf
    - data validation https://prnt.sc/leyi9m
    - onSubmit method inside the form component https://prnt.sc/leyp9i



    
