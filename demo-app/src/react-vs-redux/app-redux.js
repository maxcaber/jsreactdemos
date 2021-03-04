import React from "react";
import ReactDOM from "react-dom";

// We need createStore, connect, and Provider:
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import "./styles.css";

// Create a reducer with an empty initial state
const initialState = {};
function reducer(state = initialState, action) {
    switch (action.type) {
        // Respond to the SET_USER action and update
        // the state accordingly
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}

// Create the store with the reducer
const store = createStore(reducer);

// Dispatch an action to set the user
// (since initial state is empty)
store.dispatch({
    type: "SET_USER",
    user: {
        avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
        name: "Dave",
        followers: 1234,
        following: 123
    }
});

// This mapStateToProps function extracts a single
// key from state (user) and passes it as the `user` prop
const mapStateToProps = state => ({
    user: state.user
});

// connect() UserAvatar so it receives the `user` directly,
// without having to receive it from a component above

// could also split this up into 2 variables:
//   const UserAvatarAtom = ({ user, size }) => ( ... )
//   const UserAvatar = connect(mapStateToProps)(UserAvatarAtom);
const UserAvatar = connect(mapStateToProps)(({ user, size }) => (
    <img
        className={`user-avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
    />
));

// connect() UserStats so it receives the `user` directly,
// without having to receive it from a component above
// (both use the same mapStateToProps function)
const UserStats = connect(mapStateToProps)(({ user }) => (
    <div className="user-stats">
        <div>
            <UserAvatar user={user} />
            {user.name}
        </div>
        <div className="stats">
            <div>{user.followers} Followers</div>
            <div>Following {user.following}</div>
        </div>
    </div>
));

// Nav doesn't need to know about `user` anymore
const Nav = () => (
    <div className="nav">
        <UserAvatar size="small" />
    </div>
);

const Content = () => <div className="content">main content here Redux Demo</div>;

// Sidebar doesn't need to know about `user` anymore
const Sidebar = () => (
    <div className="sidebar">
        <UserStats />
    </div>
);

// Body doesn't need to know about `user` anymore
const Body = () => (
    <div className="body">
        <Sidebar />
        <Content />
    </div>
);

// App doesn't hold state anymore, so it can be
// a stateless function

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Nav />
                    <Body />
                </div>
            </Provider>
        )
    }
}




