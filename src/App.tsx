import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Bible from "./pages/Bible";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import WebsitePage from "./pages/WebsitePage";
import NotFoundPage from "./pages/NotFoundPage";
import Prayers from "./pages/Prayers";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WebsitePage /> },
      { path: "home", element: <Home /> },
      { path: "bible", element: <Bible /> },
      { path: "prayers", element: <Prayers /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
