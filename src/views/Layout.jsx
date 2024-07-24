import Header from "../component/Header";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";

// Layout component
const Layout = () => {
  return <>
      <div className="container-fluid">
        <Header />
        <main>
          <Outlet />
        </main>
        <footer className="mt-4">
          <Footer />
        </footer>
      </div>
    </>
  ;
};

export default Layout;
