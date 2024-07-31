import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import Toastify from "./atoms/Toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      networkMode: "online",
    },
  },
});
const App = () => {
  console.log(process.env.NODE_ENV);
  return (
    <QueryClientProvider client={queryClient}>
      <Toastify position={"top-right"} />
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      )}
      <RouterProvider router={routers} />
    </QueryClientProvider>
  );
};

export default App;
