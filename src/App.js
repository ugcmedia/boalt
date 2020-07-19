import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PreHome from "./components/PreHome";
import Home from "./components/Home";
import Iphone from "./components/Iphone";
// import Macbook from "./components/Macbook";

function isAuth() {
  if (!localStorage.getItem("apple-token")) return false;
  else return true;
}

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/prehome"
            render={() =>
              isAuth() ? <PreHome /> : <Redirect to="/?error403" />
            }
          />
           <Route
            exact
            path="/home"
            render={() => (isAuth() ? <Home /> : <Redirect to="/?error403" />)}
          />
          <Route
            exact
            path="/iphone"
            render={() =>
              isAuth() ? <Iphone /> : <Redirect to="/?error403" />
            }
          />
          {/*<Route
            exact
            path="/macbook"
            render={() =>
              isAuth() ? <Macbook /> : <Redirect to="/?error403" />
            }
          /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
