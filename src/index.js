import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import {Home} from "./View/Home/Home"
// import {About} from "./View/About/About"
// import {Adopt} from "./View/Adopt/Adopt"
// import {Foster} from "./View/Foster/Foster"
import { Sponsor } from "./View/Sponsor/Sponsor";
import { How } from "./View/How/How";
import { Cprofile } from "./View/Cprofile/Cprofile.js";
import { FF } from "./View/FF/FF";
import {Blog} from "./View/Blog/Blog"
import { Log } from "./View/Login/Log";

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const routes=createBrowserRouter(
  [
    // {
    //   path:'/',
    //   element:<Home/>
    // },

    // {
    //   path:'./about',
    //   element:<About/>
    // },

    // {
    //   path:'./adopt',
    //   element:<Adopt/>
    // },

    // {
    //   path:'./foster',
    //   element:<Foster/>
    // },

    {
      path:'/',
      element:<Sponsor/>
    },

    {
      path:'/how',
      element:<How/>
    },

    {
      path:'/cprofile',
      element:<Cprofile/>
    },

    {
      path:'/ff',
      element:<FF/>
    },

    {
      path:'/blog',
      element:<Blog/>
    },

    {
      path:'/login',
      element:<Log/>
    },
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={routes}/>
);