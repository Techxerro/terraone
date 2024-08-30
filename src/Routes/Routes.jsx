import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../View/Layout/Layout";
import Home from "../View/Pages/Home/Home";
import Errorpage from "../View/Pages/404/ErrorPage";
import About from "../View/Pages/About/About";
import { Service } from "../View/Pages/Service/Service";
import { Portfolio } from "../View/Pages/Portfolio/Portfolio";
import { Blog } from "../View/Pages/Blogs/Blogs";

const Routes = () => {
    const element = useRoutes([
        {
            path:"/",
            element: <Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/service',
                    element:<Service/>
                },
                {
                    path:'/portfolio',
                    element:<Portfolio/>
                },
                {
                    path:'/blogs',
                    element:<Blog/>
                }
            ]
        },
        {
          path:'/404',
          element:<Errorpage/>
        },
        {
          path: "*",
          element: <Navigate to="/404"  />,
        },
    ])
    return element;
}

export default Routes;