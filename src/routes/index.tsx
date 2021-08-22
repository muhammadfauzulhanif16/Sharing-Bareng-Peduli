import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  About,
  Address,
  CTA,
  Footer,
  Hero,
  Member,
  NavBar,
  Payment,
  Program,
} from "../components";

export const Routes = () => {
  return (
    <Router>
      <Route component={NavBar} />
      <Route component={Hero} />
      <Route component={About} />
      <Route component={Member} />
      <Route component={Program} />
      <Route component={Payment} />
      <Route component={Address} />
      <Route component={CTA} />
      <Route component={Footer} />
    </Router>
  );
};