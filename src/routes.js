import React from "react";
import { Route } from "react-router";
import Epics from "./pages/Epics/Epics";
import Home from "./pages/Home/Home";
import Board from "./pages/Board/Board";
import { Switch } from "react-router-dom";

// Configuration of routes
// TODO - add to list of routes
const ROUTES = [
  {
    path: "/",
    key: "HOME",
    exact: true,
    component: Home,
  },
  {
    path: "/epics",
    key: "EPICS",
    exact: true,
    component: Epics,
  },
  {
    path: "/nests/:nestId",
    key: "NEST",
    exact: true,
    component: Board,
  },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      //render={(props) => <route.component {...props} routes={route.routes} />}
      component={route.component}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a 'routes' property)
 */
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      {/* Renders when we cannot find the specified route, allows us to stay within nested sections ex: '/app/' instead
			  of a general 404 page */}
      <Route component={() => <h1>Route Not Found!</h1>} />
    </Switch>
  );
}
