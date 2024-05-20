// src/practice/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Courses from "../components/Courses";
import Product from "../components/Product";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/product" component={Product} />
      </Switch>
    </Router>
  );
};

export default Main;
