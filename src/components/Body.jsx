import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Browse from './Browse'
const Body = () => {
  const queryClient = new QueryClient()
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);
 

  return <QueryClientProvider client={queryClient}>
  <RouterProvider router={appRouter} />
  </QueryClientProvider>
};

export default Body;
