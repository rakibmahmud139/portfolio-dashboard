import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBlog from "../page/AddBlog";
import AddExperience from "../page/AddExperience";
import AddProject from "../page/AddProject";
import AddSkill from "../page/AddSkill";
import Login from "../page/Login";
import ProtectorRoute from "./ProtectorRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectorRoute>
        <App />
      </ProtectorRoute>
    ),
    children: [
      {
        path: "/",
        element: <AddProject />,
      },
      {
        path: "/addSkill",
        element: <AddSkill />,
      },
      {
        path: "/addExperience",
        element: <AddExperience />,
      },
      {
        path: "/addBlog",
        element: <AddBlog />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
