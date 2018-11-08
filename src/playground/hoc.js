import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

//regular function
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById("app"));

/*
show info component when they are authenticated
show message when they are not authenticated
*/

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login</p>
            )}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById("app"));