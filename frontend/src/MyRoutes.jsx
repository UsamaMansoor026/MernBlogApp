import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Logout from "./pages/Logout";
import CatgoriesPost from "./pages/CatgoriesPost";
import AuthorPosts from "./pages/AuthorPosts";
import Dashboard from "./pages/Dashboard";

const MyRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "posts/:id", element: <PostDetail /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "profile/:id", element: <UserProfile /> },
        { path: "authors", element: <Authors /> },
        { path: "create", element: <CreatePost /> },
        { path: "posts/categories/:category", element: <CatgoriesPost /> },
        { path: "posts/users/:id", element: <AuthorPosts /> },
        { path: "myposts/:id", element: <Dashboard /> },
        { path: "posts/:id/edit", element: <EditPost /> },
        { path: "logout", element: <Logout /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MyRoutes;
