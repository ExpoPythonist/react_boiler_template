import { Dashboard } from "../../components/dashboard/views";
import { NotFound } from "../../components/dashboard/views/NotFound";
import { SignIn } from "../../components/dashboard/views/auth";

import {
  AppSidebar
} from "../data";

const AppRoute = []


let baseUrl = "";

// Authorized Sidebar and Routes Informations - Hub
AppSidebar.map(item => {
  if (item.to) baseUrl = item.to;
  if (!item.component && !item.content) {
    return { component: NotFound };
  }
  if (item.content) {
    item.content.map(submenu => {
      return (
        submenu.component &&
        AppRoute.push({
          path: baseUrl + submenu.to,
          exact: true,
          component: submenu.component
        })
      );
    });
  } else {
    return AppRoute.push({
      path: item.to,
      exact: true,
      component: item.component
    });
  }
  return AppRoute;
});

// Authorized Routes
export const AppComponentRoute = AppRoute;

// Login or Sign in Routes
export const Auth = [
  { path: "/signin", exact: true, component: SignIn },
];

// Public Routes
export const Public = [

];

// Public Routes
export const Private = [{ path: "/", exact: true, component: Dashboard }];
