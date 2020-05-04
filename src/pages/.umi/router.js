import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.tsx').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index.tsx').default
      },
      {
        "path": "/hero",
        "exact": true,
        "component": require('../hero.tsx').default
      },
      {
        "path": "/item",
        "exact": true,
        "component": require('../item.tsx').default
      },
      {
        "path": "/summoner",
        "exact": true,
        "component": require('../summoner.tsx').default
      },
      {
        "component": () => React.createElement(require('/usr/local/lib/node_modules/umi/node_modules/_umi-build-dev@1.6.1@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/usr/local/lib/node_modules/umi/node_modules/_umi-build-dev@1.6.1@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
