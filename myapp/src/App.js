import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./Components/Notfound/Notfound";
import Rising from "./Components/rising/Rising";
import Hot from "./Components/hot/Hot";
import New from "./Components/new/New";
import Popular from "./Components/popular/Popular";
import PostsContextProvider from "./Components/Context/PostsContext/PostsContext";
import Home from "./Components/home/Home";
import Layout from "./Components/Layout/Layout";
import AuthContextProvider from "./Components/Context/AuthContext/AuthContext";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: "home", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "hot", element: <Hot /> },
      { path: "rising", element: <Rising /> },
      { path: "new", element: <New /> },
      { path: "popular", element: <Popular/> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  return (
    <>
    
      <AuthContextProvider>
      <PostsContextProvider>
        <RouterProvider router={routers}></RouterProvider>
      </PostsContextProvider>
      </AuthContextProvider>
    </>
  );
}
