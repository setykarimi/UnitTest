import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="mx-auto">
                <main className="px-5 lg:container lg:px-16 p-5 bg-gray-100 lg:py-10">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default Layout;