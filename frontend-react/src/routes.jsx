import { createBrowserRouter } from "react-router-dom";
import App from "./pages/home/App";
import ListUsers from "./pages/ListUsers"

let router = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/lista-usuarios',
        element:<ListUsers/>
    }
])

export default router