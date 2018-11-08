NODE.JS
  Checking version:
    node -v

NPM
  Checking version:
    -npm -v

YARN
  GLOBALLY installing Yarn through node.js (after installing, it's adviced to restart computer):
    npm install -g yarn

  Check version of Yarn:
    yarn --version

  GLOBALLY install live-server module (remember to use correct app directory):
    npm install -g live-server

  GLOBALLY uninstalling live-server
    npm uninstall -g live-server

  Version of live-server module:
    live-server -v

  Launching live server from app's directory:
    live-server public
    e:\Coding\JavaScript\React\Udemy\indecision-app>live-server public

BABEL
  GLOBALLY installing babel:
    npm install -g babel-cli@6.24.1

  GLOBALLY uninstalling babel
    npm uninstall -g babel-cli

    E:\Coding\JavaScript\React\Udemy\indecision-app>babel src/app.js --out-file=public/scripts/app.js --presets=env,react
    E:\Coding\JavaScript\React\Udemy\indecision-app>babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

BABEL OBJECT SPREAD OPERATOR
- Section 10, lecture 94
  https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread
  installing globally (different from the link): yarn add babel-plugin-transform-object-rest-spread@6.23.0
  - then adding it in .babellrc :: "transform-object-rest-spread"

FOR LOCALLY INSTALLING AND MAKING OWN SCRIPTS :: Section 6, lecture 49
FOR LOCALLY INSTALLING WEBPACK AND CONFIGURATION :: Section 6, lecture 50
## After this, you can use "yarn run serve" to start live-server and "yarn run build" to enable auto-reload
After lecture 57, we only need to use command "yarn run web-server" which will combine live-server and webpack watch
https://webpack.js.org/concepts/
FOR LOCALLY INSTALLING BABEL :: yarn add babel-core@6.25.0 babel-loader@7.1.1 (Section 6, lecture 54)
  - check summary of lecture 54

BABEL PLUGINS:
  - transform-class-properties (section 6 lecture 58 bookmark) <- this enabled using better syntax with ES6 class properties

WEBPACK
  - Devtool (Section 6 lecture 56 bookmark) https://webpack.js.org/configuration/devtool/#src/components/Sidebar/Sidebar.jsx
  - Dev Server (Section 6 lecture 57 bookmark) https://webpack.js.org/configuration/dev-server/

  SETTING UP WEBPACK WITH CSS & SCSS
    - section 8 lecture 64
    - css loader https://www.npmjs.com/package/css-loader
    - style loader https://www.npmjs.com/package/style-loader
    - ^^ THIS IS REQUIRED TO COMPILE CSS, BELOW IS FOR SETTING IT TO COMPILE SCSS:
      - install locally as always: "yarn add sass-loader@6.0.6 node-sass@4.5.3"

  - installing Normalize.css locally "yarn add normalize.css@7.0.0" (section 8 lecture 66) https://necolas.github.io/normalize.css/
  - normalize.css resets the base of styles to same for every browser (pretty important)
  - SCSS FUNCTIONS http://sass-lang.com/documentation/Sass/Script/Functions.html

UUID NPM PACKAGE
  https://www.npmjs.com/package/uuid
  - installing locally: yarn add uuid@3.1.0
  - importing: import uuid from "uuid";
  - using: uuid()

MOMENT PACKAGE (S11 L106)
  https://momentjs.com/
  yarn add moment@2.18.1
  

AIRBNB REACT-DATES (S11 L106)
  https://github.com/airbnb/react-dates
  yarn add react-dates@12.7.0
  yarn add react-addons-shallow-compare@15.6.0 (<- this is needed by react-dates)

STYLING FOR MOBILE DEVICES
  - section 8, lecture 72
  - use html meta tags inside index.html: "<meta name="viewport" content="width=device-width, initial-scale=1">"
    - this replace the devices settings (I suppose)
  - use media-query in (s)css file: "@media (max-width: 45rem) { CSS here }"
    - styles inside ^^ @media will run when the size is below 45rem

3RD PARTY COMPONENTS
  REACT-MODAL
    - section 7 lecture 61
    - https://github.com/reactjs/react-modal
    - must have props when creating new modal: "isOpen={boolean}" and "contentLabel="some string for accessibility"

PASSING JSX TO COMPONENT AS A CHILDREN
  - section 7 lecture 60
  - pass it inside tags: "<ComponentName><p>Example text</p></ComponentName>"
  - use it with "{props.children}"
  - passing multiple lines can be done by wrapping it inside parenthesis https://prnt.sc/ldh1g9

SECTION 3
  Finished app: http://indecision.mead.io/
  Final source code: http://github.com/andrewjmead/react-course-2-indecision-app

  package.json
    - outlined depencies project need in order to run

WINDOWS COMMAND PROMPT
  - go back in directory : cd..
  - see directory : dir
  - change drive : letter: (for example "e:")
  - path with spaces : use quotation marks around the path
  - clear prompt : cls
  - run previous comman : arrow up + enter
  - jump to beginning of command : ctrl + a

JSX EXPRESSIONS
  - can show values and strings
  - can have ternary if operator inside
  - cannot have full if-statements
  - cannot have boolean values or null or undefined (they are ignored, nothing will show up)
  - cannot show objects, but can show object keys or values

  ARRAYS IN EXPRESSIONS
    - arrays are outputted without a seperator, for example "[99, 98, 97, "String", null, undefined, true]" outputs "999897String"
    - array elements can have JSX inside of them, for example "[<p>a</p>, <p>b</p>, <p>c</p>]" outputs three paragraphs
      -arrays of JSX should have unique identifier (key prop) in each element, ie. previous array should be "[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]"
    - using Array.map() to output array elements is preferred

CONDITIONALLY DISABLING BUTTON
  - "<button disabled={true}>Click</button>"
  - if expression is true, button is disabled, if false => not disabled

LOGICAL 'AND' OPERATOR
  - example code:: true && "Some age"
    - this will return "Some age"
  - example code:: false && "Some age"
    - this will return false (and JSX expression will ignore it)
  - example code:: {user.age >= 18 && <p>Age: {user.age}</p>}
    - this will return paragraph if user is 18 or over, otherwise returns false

LOGICAL 'NOT' OPERATOR
  - can convert truthy and falsy values into boolean, for example empty string is a falsy value
    "" = "", !"" = true, !!"" = false
    undefined = undefined, !undefined = true, !!undefined = false

EVENTS AND ATTRIBUTES
  https://reactjs.org/docs/dom-elements.html (there is also a list of all supported HTML attributes)
  https://reactjs.org/docs/events.html

DATA BINDING
  -JSX doesn't have built-in data binding
  -Real time data binding without React modules : Section 3, Lecture 17

ES6 CLASSES AND SUBCLASSES
  - subclasses are made with "extends" keyword
  - you can pass the parameters of parent class with "super()" keyword https://prnt.sc/lcoelw
  - overwriting parent's method can be done simply by writing the same method name in subclass
  - inside subclass, you can access parent's methods with "super.", ie: "super.parentMethodName()"

ES6 OBJECT SHORTHAND
  - if object has a key whose value comes from a variable with the exact same name, we can only write the name once
    -EXAMPLE: { someName : someName } == can be written like ==> { somename }

ES6 OBJECT SPREAD OPERATOR
  - Section 10, lecture 94

ES6 ARROW FUNCTIONS
  - arrow functions have access to shorthand syntax when we return one "item" or thing
  - EXAMPLES  "const num = () => { return 1+1 }" can be but into:
              "const num = () => 1+1"
  - returning empty arr for example: "const returnArr = () => []"
  - BUT returning empty object: "const returnObj = () => ({})" (so, that object needs to be wrapped in parenthesis)

ES6 OBJECT DESTRUCTURING (Section 10, lecture 88)
  - we can take object and rip it apart to own variables'
  - these variables now contains the object's properties
# const objectName = { keyOne: valueOne, keyTwo: valueTwo };
  ^^ we could use "objectName.keyOne" and "objectName.keyTwo" to fetch the values
# const { keyOne, keyTwo } = objectName; 
  ^^ now we can just use "keyOne" or "keyTwo" to fetch their values

  RENAMING VARIABLE NAMES
# const { keyOne, keyTwo: newName } = objectName;
  ^^ now we can fetch the value of keyTwo by using "newName" instead

  SETTING DEFAULT VALUES
# const { keyOne = "some default value", keyTwo } = objectName;
  ^^ now, if keyOne doesn't have a value assigned (or if there isn't key for that name), it assigns the given default value to the variable

  RENAMING VARIABLE NAME AND USING DEFAULT VALUE
# const { keyOne: newName = "some default value", keyTwo } = objectName;

ES6 ARRAY DESTRUCTURING (Section 10, lecture 89)
  - same principle as with object destructuring

# const [varNameForItemZero, varNameForItemOne, varNameForItemTwo, varNameForItemThree] = arrayName;
  ^^ that is an ordered list of array items. Now we can access array items with those variable names

  FOR USING JUST SOME OF THE ARRAY ITEMS:
  - for example, if we want to use the second and the third item of the array:
# const [, varNameForItemOne, varNameForItemTwo] = arrayName;
  ^^ we leave the comma for the first item, and leave the last item out of the declaration

  USING DEFAULT VALUES
  - same as with objects
# const [varNameForItemZero, varNameForItemOne, varNameForItemTwo = "some default value", varNameForItemThree] = arrayName;

ES6 IMPORT / EXPORT
  EXPORTS
    - two types of exports: default exports and named exports
    - with default exports you can export only one thing (the default value), with named exports you can export multiple values
    - named exports first way: "export { nameOfExport };" (curly braces are NOT object definition)
    - named exports second way: "export const nameOfExport = () => someReturn;" (named exports should be variables, not strings for example)
    - default exports first way: "export { nameOfNormalExport1, nameOfNormalExport2, nameOfDefaultExport as default };"
    - default exports second way: "export default nameOfDefaultExport;" (this has to come AFTER the actual declaration of it's value)
      - ^^ class methods are exception, they can be exported at the same time as defining them (Section 6 Lecture 55 bookmark)

  IMPORTS
    - named imports: 'import { nameOfImport } from "path";' (name of import has to match the exported name)
    - default imports: 'import nameOfDefaultExport, { nameOfNormalExport1, nameOfNormalExport2 } from "path";'
    - importing ONLY default: 'import nameOfDefaultExport from "path";'

  ABOUT DEFAULT EXPORTS
    - you necessarily don't have to import it by the correct (exported) name

IMPORTING npm MODULES (Section 6, lecture 53)
  - three phases: install -> import -> use
  - installing in command prompt with yarn: "yarn add name" (after this it should show in package.json)
  - for importing, check the module documentation (for example: https://www.npmjs.com/package/validator)
  - for using the module, check the module documentation (for example: https://www.npmjs.com/package/validator)


REACT COMPONENTS 
  CLASS BASED COMPONENTS:
  WITHOUT IMPORTING:
    - "class ComponentName extends React.Component {}"
  
  - class based component name must start with an uppercase
  - class based components must have "render" method defined, which returns JSX
  - class based components can access props via "this.props"

  STATELESS FUNCTIONAL COMPONENTS:
    - "const ComponentName = () => {};"
    - can be used implicitly when returning JSX: "const ComponentName = () => (<div>Some text</div>);" https://prnt.sc/ldh5nq
    - functional components can access props by passing "props" argument in the function: "const ComponentName = (props) => {};
    - after passing props as an argument, they can be accessed inside the component by using "props." keyword


SELF CONTAINING CLASS
  - class contains methods instead of grabbing globally defined functions / variables
  - has all it needs inside the class

BINDING EVENT HANDLERS INSIDE CLASS (section 4 lecture 30)
  - call ".bind(this)" inside constructor method, remember to use "super(props)" https://prnt.sc/lcqjzq

PROPS (reversing data flow)
  - props can only be passed down to components (one-way data flow)
  - props can't be modified
  - you can however, pass a method as a prop down from a parent component to a child component, and reference it with props in child (Section 4, lecture 36 bookmark)
  - that way the child can call the parent's method and pass the action from child to parent
  - passing data from child to parent can be done with method arguments (Section 4, lecture 37)

DEFAULT PROP VALUES (Section 5 lecture 41)
  - can be defined using object declaration: "ComponentName.defaultProps = {}"
  - can be used inside component constructor's state object like: this.state = { keyName: props.keyName } (remember to pass constructor the "props" as argument)

COMPONENT STATES
  - is defined in the component
  - unlike props, states can be changed by the component itself
  - allows component to manage data (components might have key-value pairs as data)
  - when that data changes, component will automatically render to reflect those changes

  SETTING UP A STATE
    1. setup default state object (component will render itself for the very first time using these default values)
    2. now component is rendered with default state values (happens behind the scenes)
    3. state changes based on event (for example onClick event)
    4. application automatically re-renders itself using the new state values (happens behind the scenes)
    5. start again from step 3

  UPDATING STATE WITH setState()
  - use updater function inside "setState()" for example inside a method, setState() has first argument which is commonly called "prevState"
  - prevState is the previous state object, so it can be accessed as prevState.keyName
  - for example: 

      this.setState((prevState) => {
        return {
          // do something, for example:
          keyName: prevState.keyName + 1
        };
      });

LIFECYCLE METHODS (ONLY IN CLASS BASED COMPONENTS) -- https://reactjs.org/docs/react-component.html
  - componentDidMount() -- fires when component first gets mounted to the dom
  - componentDidUpdate() -- fires after the component updates, so after state values or prop values change
    - inside componentDidUpdate(), we have access to "this.state" and "this.props" for the new state / prop values
    - arguments of componentDidUpdate() can be for previous props and previous state, for example "componentDidUpdate(prevProps, prevState);"
  - componentWillUnmount() -- fires when component goes away (fires just before component gets removed from the DOM)

HIGH ORDER COMPONENTS (HOC)
  - Session 11, lecture 100
  - regular React component that renders another component
  - goal of HOC component is to reuse code
  - we're going to be able to perform:
    - "render hijacking"
    - prop manipulation
    - abstract state

  CREATING A HOC
    - create a regular component which will later be wrapped inside a HOC (http://prntscr.com/le6yvd)
      - if it uses props -> they act normally
    - create a NORMAL JavaScript arrow function (https://prnt.sc/le6yxt)
      - argument name could be: "WrappedComponent" (we're passing a component to the function, hence the uppercase first letter)
      - inside the function, return arrow function (which will contain JSX) and pass the props as an argument
      - inside the returned function, use the argument name to place the regular component: "<WrappedComponent />"
      - use spread operator to pass the original props: "<WrappedComponent {...props} />
    - now we have one component and a JS function which can be used like so: "normalFunction(NormalComponent);"
      - this can be assigned to a variable: "const VariableName = normalFunction(NormalComponent);" (https://prnt.sc/le6z1g)
    - the variable can be used now as a regular component: "<VariableName />"
      - with props: "<VariableName propName={something} />" (https://prnt.sc/le6z57)
      - ^^^^ we can pass multiple props, and they can be used inside the HOC and the regular component