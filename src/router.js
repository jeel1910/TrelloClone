import { createBrowserRouter } from "react-router-dom";

import { PUBLIC_ROUTE, PRIVATE_ROUTE } from "./Constatnts";
import Home from "../src/Container/pages/Home";
import SignIn from "../src/Container/pages/SignIn";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: PUBLIC_ROUTE.HOME,
    Component: App,
  },
  {
    path: PUBLIC_ROUTE.SIGN_IN,
    Component: SignIn,
  },
  // {
  //   path: PRIVATE_ROUTE,
  // },
]);
