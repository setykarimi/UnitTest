import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
    return ( 
        <div className="container mx-auto">
            <Navbar />
            <main className="px-5 bg-gray-100">
            <Outlet />
            </main>
        </div>
     );
}
 
export default Layout;