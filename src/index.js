import ReactDom from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./views/Home/Home";
import DashBorad from "./views/Dashborad/DashBorad";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/dashbord",
    element: <DashBorad/>,
  },
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}/>
  
);

