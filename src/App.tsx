import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Bible from "./pages/Bible";
import ErrorPage from "./pages/ErrorPage";
import Foundations from "./pages/Foundations";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Prayers from "./pages/Prayers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "foundations", element: <Foundations /> },
      { path: "bible", element: <Bible /> },
      { path: "prayers", element: <Prayers /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
