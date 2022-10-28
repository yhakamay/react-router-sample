import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route
      path="/page1"
      render={({ match: { url } }) => (
        <Switch>
          {page1Routes.map((e) => {
            return (
              <Route
                key={e.path}
                exact={e.exact}
                path={`${url}${e.path}`}
                render={() => e.children}
              />
            );
          })}
        </Switch>
      )}
    />
    <Route path="/page2" render={() => <Page2 />} />
  </Switch>
);
