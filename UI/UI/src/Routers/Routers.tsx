import App from "@/App";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: App />, return JSX
        Component: App,
        children:[
            {
                //path: "user",
                index:true,
                Component: User,
            },
             {
              path: "user",
                
                Component: User,
            },
            {
               path: "task",
               Component: Task,
            }
        ]
    },
]);

export default router;