import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function RoutesDom() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default RoutesDom;
