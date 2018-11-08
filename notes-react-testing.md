JEST
    - is a test framework

INSTALLING JEST
    yarn add jest@20.0.4

ADDING A SCRIPT
    "test": "jest"

RUNNING THE SCRIPT IN CONSOLE
    yarn test

AUTO-UPDATE
#   - NOTE: THIS WILL BE DIFFERENT IF USING ENZYME
    yarn test -- --watch

# REACT-TEST-RENDERER
#   INSTALLING
        yarn add react-test-renderer@16.0.0

#   SHALLOW RENDERING (S12 L118)
        import ReactShallowRenderer from "react-test-renderer/shallow";
        - only renders the given component

#   SNAPSHOTS (S12 L118)
        - creates a snapshot and if Jest notices any changes to the original file -> it fails the test in command prompt and shows the differences
        - if snapshot recognices changes, you can make the current updated version to be the new snapshot by pressin "u" in command prompt
        - snapshot files have the extension ".test.js.snap" and they should not be modified manually

#       IN SHALLOW RENDERING
            EXAMPLE OF CREATING A NEW SNAPSHOT:
                - like other tests, the code below needs to be inside test() function
                - const renderer = new ReactShallowRenderer();
                - renderer.render(<ComponentName />); (COMPONENT NEEDS TO BE IMPORTED)
                - expect(renderer.getRenderOutput()).toMatchSnapshot();

# ENZYME FOR REACT v16 (S12 L119)
    - Enzyme can be used instead of React-test-renderer
    - https://airbnb.io/enzyme/
    yarn add enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2

#   SETUP TEST FILE
        - create "setupTests.js" file inside "tests" folder
#       INSIDE THAT FILE:
            - import Enzyme from "enzyme";
            - import Adapter from "enzyme-adapter-react-16";
            Enzyme.configure({
                adapter: new Adapter()
            });
#   ALSO NEEDED:
        - https://jestjs.io/docs/en/configuration
        - create "jest.config.json" file inside the app root directory
#       INSIDE THAT FILE:
            {
                "setupFiles": [
                    "raf/polyfill", 
                    "<rootDir>/src/tests/setupTests.js"
                ]
            }

#   ALSO NEEDED:
        - we need to change our script inside package.json
        - TO THIS: "test": "jest --config=jest.config.json"

#   USING ENZYME
        - as usual: inside test(); function:
#       EXAMPLE TEST:
            - const wrapper = shallow(<ComponentName />); 
            - ^^ "wrapper" is a common name to be used for these variables
            - ^^^^ using shallow() gives us access to many methods (which can be found in Enzyme documentation)
            -EXAMPLE:  expect(wrapper.find("h1").length).toBe(1);
            - ^^ find() is like .querySelectorAll()
            -EXAMPLE:  expect(wrapper.find("h1").text()).toBe("Text it should be")

#   CREATING SNAPSHOT
#       SHALLOW:
            - const wrapper = shallow(<Header />);
            - DON'T USE UNLESS toJSON LIBRARY IS INSTALLED AND CONFIGURED: expect(wrapper).toMatchSnapshot();
            - WITH toJSON LIBRARY INSTALLED BUT NOT CONFIGURED: expect(toJSON(wrapper)).toMatchSnapshot();
            - WITH toJSON LIBRARY INSTALLED AND CONFIGURED: expect(wrapper).toMatchSnapshot();
            - INSTALL toJSON:
                - https://www.npmjs.com/package/enzyme-to-json
                - yarn add enzyme-to-json@3.0.1
                - import toJSON from "enzyme-to-json";
#           - CONFIGURING TO GET toJSON AUTOMATICALLY BE USED WITH ENZYME:
                - inside jest.config.json:
                    "snapshotSerializers": [
                        "enzyme-to-json/serializer"
                    ]

# MOCKS WITH JEST (S12 L121)
    - https://jestjs.io/docs/en/manual-mocks
    - testing components which outputs dynamic content using 3rd party libraries can be done with mocks ("moment" library for example)
    - we need to create "__mock__" folder inside "tests" folder
    - inside "__mock__" folder, create a file which corresponds to the name of the library, in this case "moment.js"
    - inside the file, you need to require the real library:
        EXAMPLE: const moment = require.requireActual("moment");
    - then export and define the return value:
        EXAMPLE: export default (timestamp = 0) => { return: moment(timestamp); };

# TESTING USER INTERACTION (S12 L122) WITH ENZYME & JEST
#   RETURNING NODES
        - https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
        find();
        - works like .querySelectorAll()
        - can find components as well by their name
        - could be used with ".at(Number)" to access specific node
            - https://airbnb.io/enzyme/docs/api/ShallowWrapper/at.html
        EXAMPLE:
            - variableName.find("input").at(1);

#   SIMULATING EVENTS
        - https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
        simulate(eventType, possible arguments);

#       HOW TO FAKE preventDefault
            simulate("submit", {
                preventDefault: () => { }
            })

#       PASSING .target.value
            const value = "something";
            simulate("change", {
                target: { value }
            });
        
#   ACCESSING STATE
        - https://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html
        state(stateName);
        - you can use it with other functions as well, like with ".toBe" or ".length"
            - and you could use ".length" with "toBeGreaterThan()"
        EXAMPLE:
            - variableName.state(stateName).length.toBeGreaterThan(0)

#   FULL EXAMPLE OF TESTING USER INTERACTION
        const value = "Some value";
        const wrapper = shallow(<ComponentName />);
        wrapper.find("input").at(0).simulate("change", {
            target: { value }
        });
        expect(wrapper.state("description")).toBe(value);

# SPIES (S12 L123)
    - basically a mock function
    - spies can be passed as a prop to a components and after that for example check if the function was called, how many times it was called, with what arguments it was called etc.
    - creating a spy example:
        const onSubmitSpy = jest.fn()
    - this gives us access for example to these methods:
        .toHaveBeenCalled()
        .toHaveBeenCalledTimes(number)
        .toHaveBeenCalledWith(arg1, arg2, ...)
        .toHaveBeenLastCalledWith(arg1, arg2, ...)
        .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
        - https://jestjs.io/docs/en/expect

# ACCESSING PROPS
    - using .prop(propName) for single props
    - using .props() for multiple 
    - https://airbnb.io/enzyme/docs/api/ShallowWrapper/prop.html

    - setting props (S12 L126)
    - using .setProps(props)
    - https://airbnb.io/enzyme/docs/api/ShallowWrapper/setProps.html

# FILENAMES
    - should have .test.js
    - otherwise jest won't recognice these as test files
        - it won't run them
        - and we don't have access to Jest's own functions

# SIMPLE EXAMPLE TEST
    - using Jest's global functions
        test("description of the test", () => { actual test inside arrow function })
        expect("some test")
        toBe("expected result)

#       test("should add two numbers", () => {
#           const result = add(3, 4);
#           expect(result).toBe(7);
#       });                     

# JEST FUNCTIONS / METHODS
#   test(description, () => {} );
        - everything considering individual test is inside the arrow function

#   expect();
        - inside parenthesis: what we're testing

#   toBe();
        - inside parenthesis: what we expect to happen. Not suitable for arrays or objects

#   toEqual();
        - inside parenthesis: what we expect to happen. Is suitable for arrows and objects

#   expect.any();
        - when something contains dynamic data
        - inside parenthesis: the type (for example: String, Boolean, Number, etc.)

#   DRY (DON'T REPEAT YOURSELF):
#       afterAll();
#       afterEach();
#       beforeAll();
#       beforeEach();
^^ https://prnt.sc/lfk3ec
^^ https://jestjs.io/docs/en/api

# FIXTURES FOLDER
    - in testing, fixture is a simply test data (dummy data)