import React from "react";
import { Route } from "react-router";
import Epics from "./pages/Epics/Epics";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Nest from "./pages/Nest/Nest";
import Nests from "./pages/Nest/Nests";
import Story from "./pages/Story/Story";
import Stories from "./pages/Story/Stories";
import LearnNests from "./pages/LearnMore/LearnNests";

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
    component: Nest,
  },
  {
    path: "/nests",
    key: "NESTS",
    exact: true,
    component: Nests,
  },
  {
    path: "/team",
    key: "TEAM",
    exact: true,
    component: Team,
  },
  {
    path: "/nests/:nestId/stories",
    key: "STORIES",
    exact: true,
    component: Stories,
  },
  {
    path: "/nests/:nestId/stories/:storyId",
    key: "STORY",
    exact: true,
    component: Story,
  },
  {
    path: "/learnMore/learnNests",
    key: "LEARN-MORE-NESTS",
    exact: true,
    component: LearnNests,
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
      render={(props) => (
        <route.component
          {...props}
          routes={route.routes}
          baseProps={route.baseProps}
        />
      )}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a 'routes' property)
 */
export function RenderRoutes({ routes, userInfo }) {
  return (
    <Switch>
      {routes.map((route, index) => {
        route.baseProps = { userInfo: userInfo };
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      {/* Renders when we cannot find the specified route, allows us to stay within nested sections ex: '/app/' instead
        of a general 404 page */}
      <Route component={() => <h1>Route Not Found!</h1>} />
    </Switch>
  );
}
