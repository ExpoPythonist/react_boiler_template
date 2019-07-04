import { About, Contact, Resources, Dashboard } from "../../components/views";
import { NotFound } from "../../components/views/NotFound";
import { Activate, ThankYou, SignIn } from "../../components/views/auth";

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
  { path: "/about", exact: true, component: About },
  { path: "/contact", exact: true, component: Contact },
  { path: "/resources", exact: true, component: Resources },
  { path: "/active-account", exact: true, component: Activate },
  { path: "/thank-you", exact: true, component: ThankYou }
];

// Public Routes
export const Private = [{ path: "/", exact: true, component: Dashboard }];
