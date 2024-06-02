import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../Styles.css'

export const RootLayout = () => {
  return (
    <div className="main-content" style={{ minHeight: '100vh' }}>
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="flex-grow">
        <Outlet />
      </div>
      </div>
      <Footer />
    </div>
  );
};
