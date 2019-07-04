import { About, Contact, Resources, Dashboard } from "../../openaccess/components/views";
import { NotFound } from "../../openaccess/components/views/NotFound";
import { Activate, ThankYou, SignIn, SignUp } from "../../openaccess/components/views/auth";

import {
  HubSidebar,
  // UserSidebar,
  // PubSidebar,
  // UnivSidebar,
  // FunderSidebar,
  // ConsortiaSidebar
} from "../data";

const HubRoute = []
// UserRoute = [],
// PubRoute = [],
// ConsortiaRoute = [],
// FunderRoute = [],
// UnivRoute = [];

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

// // Authorized Sidebar and Routes Informations - User
// UserSidebar.map(item => {
//   if (item.to) baseUrl = item.to;
//   if (!item.component && !item.content) {
//     return { component: NotFound };
//   }
//   if (item.content) {
//     item.content.map(submenu => {
//       return (
//         submenu.component &&
//         UserRoute.push({
//           path: baseUrl + submenu.to,
//           exact: true,
//           component: submenu.component
//         })
//       );
//     });
//   } else {
//     return UserRoute.push({
//       path: item.to,
//       exact: true,
//       component: item.component
//     });
//   }
//   return UserRoute;
// });

// // Authorized Sidebar and Routes Informations - Admin
// PubSidebar.map(item => {
//   if (item.to) baseUrl = item.to;
//   if (!item.component && !item.content) {
//     return { component: NotFound };
//   }
//   if (item.content) {
//     item.content.map(submenu => {
//       return (
//         submenu.component &&
//         PubRoute.push({
//           path: baseUrl + submenu.to,
//           exact: true,
//           component: submenu.component
//         })
//       );
//     });
//   } else {
//     return PubRoute.push({
//       path: item.to,
//       exact: true,
//       component: item.component
//     });
//   }
//   return PubRoute;
// });

// // Authorized Sidebar and Routes Informations - User
// UnivSidebar.map(item => {
//   if (item.to) baseUrl = item.to;
//   if (!item.component && !item.content) {
//     return { component: NotFound };
//   }
//   if (item.content) {
//     item.content.map(submenu => {
//       return (
//         submenu.component &&
//         UnivRoute.push({
//           path: baseUrl + submenu.to,
//           exact: true,
//           component: submenu.component
//         })
//       );
//     });
//   } else {
//     return UnivRoute.push({
//       path: item.to,
//       exact: true,
//       component: item.component
//     });
//   }
//   return UnivRoute;
// });

// // Authorized Sidebar and Routes Informations - Funder
// FunderSidebar.map(item => {
//   if (item.to) baseUrl = item.to;
//   if (!item.component && !item.content) {
//     return { component: NotFound };
//   }
//   if (item.content) {
//     item.content.map(submenu => {
//       return (
//         submenu.component &&
//         FunderRoute.push({
//           path: baseUrl + submenu.to,
//           exact: true,
//           component: submenu.component
//         })
//       );
//     });
//   } else {
//     return FunderRoute.push({
//       path: item.to,
//       exact: true,
//       component: item.component
//     });
//   }
//   return FunderRoute;
// });

// // Authorized Sidebar and Routes Informations - User
// ConsortiaSidebar.map(item => {
//   if (item.to) baseUrl = item.to;
//   if (!item.component && !item.content) {
//     return { component: NotFound };
//   }
//   if (item.content) {
//     item.content.map(submenu => {
//       return (
//         submenu.component &&
//         ConsortiaRoute.push({
//           path: baseUrl + submenu.to,
//           exact: true,
//           component: submenu.component
//         })
//       );
//     });
//   } else {
//     return ConsortiaRoute.push({
//       path: item.to,
//       exact: true,
//       component: item.component
//     });
//   }
//   return ConsortiaRoute;
// });

// Authorized Routes
export const Hub = HubRoute;
// export const User = UserRoute;
// export const Publisher = PubRoute;
// export const University = UnivRoute;
// export const Funder = FunderRoute;
// export const Consortia = ConsortiaRoute;

// Login or Sign in Routes
export const Auth = [
  { path: "/signin", exact: true, component: SignIn },
  { path: "/signup", exact: true, component: SignUp }
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
