import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/Store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout.tsx";
import { ErrorRoute } from "./routes/ErrorRoute.tsx";
import { HomeRoute } from "./routes/HomeRoute.tsx";
import { CharactersRoute } from "./routes/CharactersRoute.tsx";
import { NewCharacterRoute } from "./routes/NewCharacterRoute.tsx";
import { NewCustomCharacterRoute } from "./routes/NewCustomCharacterRoute.tsx";
import { NewPremadeCharacterRoute } from "./routes/NewPremadeCharacterRoute.tsx";
import { AdventureRoute } from "./routes/AdventureRoute.tsx";
import { LoginRoute } from "./routes/LoginRoute.tsx";
import { StoriesRoute } from "./routes/StoriesRoute.tsx";  
import { SignupRoute } from "./routes/SignupRoute.tsx";
import "./index.css";
import { AboutRoute } from "./routes/AboutRoute.tsx";
import { HowToPlay } from "./routes/HowToPlayRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: "/characters",
        element: <CharactersRoute />,
      },
      {
        path: "/characters/new",
        element: <NewCharacterRoute />,
      },
      {
        path: "/characters/new/custom",
        element: <NewCustomCharacterRoute />,
      },
      {
        path: "/characters/new/premade",
        element: <NewPremadeCharacterRoute />,
      },
      {
        path: "/howtoplay",
        element: <HowToPlay />,
      },
      {
        path: "/adventure",
        element: <AdventureRoute />,
      },
      {
        path: "/login",
        element: <LoginRoute />,
      },
      {
        path: "/signup",
        element: <SignupRoute />,
      },
      {
        path: "/stories",
        element: <StoriesRoute />,
      },
      {
        path: "/about",
        element: <AboutRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
   
  </React.StrictMode>
);
