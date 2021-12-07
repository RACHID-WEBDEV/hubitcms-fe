import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
     const [sidebarOpen, setsidebarOpen] = useState(false);
     const openSidebar = () => {
          setsidebarOpen(true);
     };
     const closeSidebar = () => {
          setsidebarOpen(false);
     };
     return (
          <>
               <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
               {children}
               <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          </>
     );
};

export default Layout;
