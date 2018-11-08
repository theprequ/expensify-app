https://github.com/ReactTraining/react-router
https://reacttraining.com/react-router/

INSTALLING GLOBALLY
    yarn add react-router-dom@4.2.2

CHANGES TO webpack.config.js
    - add "historyApiFallback: true" to "devServer" (Section 9 Lecture 77 bookmark)

IMPORTING
    import {} from "react-router-dom"
    - we're importing named exports, names can be found on the web page under API: https://reacttraining.com/react-router/web/guides/quick-start
    - for example: import {BrowserRouter, Route} from "react-router-dom"

USING BrowserRouter
    - routes need to be inside <BrowserRouter> tags : <BrowserRouter>ROUTES HERE</BrowserRouter>
    - each route is specified with self-enclosing <Route /> tags: <Route path="url" component={ComponentName} />
    - for exact matches of the path, we must use "exact" keywoard: <Route path="url" component={ComponentName} exact={true} />
    - <BrowserRouter> expects zero or one childs, so if we have many routes, we need to put them inside <div> tags for example
    - <Switch> tags can be used to get React Router to only show the first match on the list. So it'll return the FIRST path that matches what the user wants
    - now we can change the <div> tags and change it to <Switch> tags
    - EXAMPLE: https://prnt.sc/ldls4l
#       <BrowserRouter>
#           <Switch>
#               <Route path="/" component={ExpenseDashboardPage} exact={true} />
#               <Route path="/create" component={AddExpensePage} />
#               <Route path="/edit" component={EditExpensePage} />
#               <Route path="/help" component={HelpPage} />
#               <Route component={NotFoundPage} />
#           </Switch>
#       </BrowserRouter>

USING Link
    - when linking internally in own application
    - creates <a> tag and uses client side routing to get into that link
    - usage <Link to="url">Link text</Link>

USING NavLink
    - same as <Link> but with additional features
    - for example with <NavLink> we can speficy which link is active and apply custom style to the active link/page
    - ^^ <NavLink to="url" activeClassName="some-class-name">Link text</NavLink>
    - as with Routes, we can specify exact match for the link using "exact={boolean}"
    - ^^ <NavLink to="url" activeClassName="some-class-name" exact={true}>Link text</NavLink>

QUERY STRINGS AND URL PARAMETERS (Section 9 Lecture 81)
    - when React Router finds a route and it's a match, it renders an instance of that component
    - when it renders the component, it also passes props with it. Any time we use a component inside a route - we get access to those via props
    - accessing them via props: https://prnt.sc/lduw5v
    - PROPS:
        History contains properties which most of them are methods which allows manipulating history (for example: rederict user via JavaScript)
#           props.history
        Location contains information about the current url (for example query string can show up there https://prnt.sc/lduvox)
#           props.location
        Match contains info about why the current url is considered a match
#           props.match

    DYNAMIC URLS
        - for example url for specific post or user (the id part could be the dynamic part)
        - can be done by using colon, for example /edit/:id (where :id is the dynamic part) 
        - using :name gives the access to that dynamic value in:
#           ^^ props.match.params

    - IMPORTANT: Router is only going to pass these props down to components that are actually used inside of a route