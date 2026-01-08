import { createBrowserRouter } from "react-router";
import Homepage from "../Pages/Homepage/Homepage";
import Coursepage from "../Pages/Coursepage/Coursepage";
import Listpage from "../Pages/Listpage/Listpage";
import Searchpage from "../Pages/Listpage/Listpage";
import App from "../App";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {path: "", element: <Homepage />},
            {path: "list/course", element : <Coursepage />},
            {path: "search/course", element : <Coursepage />},
            {path: "list", element: <Listpage />},
            {path: "search", element: <Searchpage />},
        ]
    }
])