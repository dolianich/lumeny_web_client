import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
