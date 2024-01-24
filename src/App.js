import React, { Suspense, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";


const InstaMart = lazy(()=> import ("./components/InstaMart"))

const AppLayout = () =>{
  const [userName, setUserName] = useState();
    return(
        <UserContext.Provider value={{ userDetails: userName, setUserName }} >
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
        </UserContext.Provider>
    );
}


const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement : <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
          children: [
            {
              path: "profile",
              element: <Profile name={"AkshayClass"} />,
            },
          ]
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/instamart",
          element: <Suspense><InstaMart/></Suspense>
        },
        {
          path:"/restaurant/:id",
          element: <RestaurantMenu />
        }
      ]
    },
    
  ]

)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)