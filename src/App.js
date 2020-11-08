// import React from 'react';
// import { Switch, Route } from "react-router-dom"
// import HomePage from "./pages/HomePage/HomePage"
// import ShopPage from "./pages/ShopPage/ShopPage"
// import CartPage from "./pages/CartPage/CartPage"
// import LoginPage from "./pages/LoginPage/LoginPage"
// import SignupPage from "./pages/SignupPage/SignupPage"
// import ChangePassword from "./pages/ChangePassword/ChangePassword"
// import ProfilePage from "./pages/ProfilePage/ProfilePage"
// import GlobalStyle from "./GlobalStyle"
// import "./App.css"

// function App() {
//   return (
//     <div className="home">
//       <GlobalStyle />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/shop" component={ShopPage} />
//         <Route path="/cart" component={CartPage} />
//         <Route path="/login" component={LoginPage} />
//         <Route path="/signup" component={SignupPage} />
//         <Route path="/profile" component={ProfilePage} />
//         <Route path="/change-password" component={ChangePassword} />

//       </Switch>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import ShopPage from "./pages/ShopPage/ShopPage";
// import ProfilePage from "./pages/ProfilePage/profilePage";
import CartPage from "./pages/CartPage/CartPage";
import GlobalStyle from "./GlobalStyle"
import LoginPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import ChangePassword from "./pages/ChangePassword/ChangePassword"


import { setCurrentUser } from "./redux/user/user-actions";


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="main">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={ShopPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/change-password" component={ChangePassword} />
          {/* <Route path="/profile" component={ProfilePage} /> */}
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LoginPage />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignupPage />
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
