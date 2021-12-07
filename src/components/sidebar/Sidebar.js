import "./Sidebar.css";
import {
     logo,
     Brief,
     House,
     Logout,
     OpenBook,
     OpenParcel,
     Postcard,
     Settings,
     User,
} from "../../assets";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
     return (
          <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
               <div className="sidebar__title">
                    <div className="sidebar__img">
                         <img src={logo} alt="logo" />
                    </div>
                    <i
                         onClick={() => closeSidebar()}
                         className="fa fa-times"
                         id="sidebarIcon"
                         aria-hidden="true"
                    ></i>
               </div>
               <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                         <img src={House} alt="icon" />
                         <a href="/#">Dashboard</a>
                    </div>
                    <div className="sidebar__link">
                         <img src={Brief} alt="icon" />
                         <a href="/#">Pages</a>
                    </div>
                    <div className="sidebar__link">
                         <img src={OpenBook} alt="icon" />
                         <a href="/#">Posts</a>
                    </div>
                    <div className="sidebar__link">
                         <img src={OpenParcel} alt="icon" />
                         <a href="/#">Commerce</a>
                    </div>
                    <div className="sidebar__link">
                         <img src={User} alt="icon" />
                         <a href="/#">Publisher</a>
                    </div>
                    <div className="sidebar__link">
                         <img src={Postcard} alt="icon" />
                         <a href="/#">Newsletter</a>
                    </div>
                    <div className="sidebar__link">
                         <img src={Settings} alt="icon" />
                         <a href="/#">Settings</a>
                    </div>
                    <div className="sidebar__link">
                         <img src={Logout} alt="icon" />
                         <a href="/#">Log out</a>
                    </div>
               </div>
          </div>
     );
};

export default Sidebar;
