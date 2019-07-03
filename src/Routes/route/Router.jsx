import { Dashboard } from "../../components/views";
import { NotFound } from "../../components/views/NotFound";
import { SignIn } from "../../components/views/auth";

import {
  HubSidebar,
} from "../data";

const HubRoute = []

let baseUrl = "";

// Authorized Sidebar and Routes Informations - Hub
HubSidebar.map(item => {
  if (item.to) baseUrl = item.to;
  if (!item.component && !item.content) {
    return { component: NotFound };
  }
  if (item.content) {
    item.content.map(submenu => {
      return (
        submenu.component &&
        HubRoute.push({
          path: baseUrl + submenu.to,
          exact: true,
          component: submenu.component
        })
      );
    });
  } else {
    return HubRoute.push({
      path: item.to,
      exact: true,
      component: item.component
    });
  }
  return HubRoute;
});

// Authorized Routes
export const Hub = HubRoute;
// Login or Sign in Routes
export const Auth = [
  { path: "/signin", exact: true, component: SignIn },
];

// Public Routes
export const Public = [

];

// Public Routes
export const Private = [{ path: "/", exact: true, component: Dashboard }];
