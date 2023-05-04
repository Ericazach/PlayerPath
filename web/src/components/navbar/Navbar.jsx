import { Navbar, Dropdown } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthStore";
import "./navbar.css";

const renderNavLink = ({ isActive }) =>
  isActive ? "text-[#FF9677]" : "text-white";

function NavbarGames() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar className="navbar-bg">
      <NavLink to="/">
        <img
          className=" logo max-w-[80px] min-h-[80px]"
          src="/mando.png"
          alt="logo"
        />
      </NavLink>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <img
              className="w-14 logo min-w-[80px] min-h-[80px]"
              src={
                user?.email
                  ? user?.profilePic ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt="profilePic"
            />
          }
        >
          <Dropdown.Header>
            {user?.email ? (
              <>
                <span className="block text-lg"> {user.username} </span>
                <span className="block truncate text-lg">{user.email}</span>
                <Dropdown.Item>
                  <NavLink to={`/users/${user.id}`}>
                    <span className="text-lg">Profile</span>{" "}
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <button onClick={() => logout()} className="text-lg">
                    Log out
                  </button>
                </Dropdown.Item>
              </>
            ) : (
              <>
                <NavLink to="/register">
                  <span className="text-lg text-[#FF9677]">Register</span>
                </NavLink>
              </>
            )}
          </Dropdown.Header>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {user?.email ? (
          <></>
        ) : (
          <div className="flex justify-end items-end gap-3">
            <NavLink to="/register" className={renderNavLink}>
              <div className="text-2xl">Register</div>
            </NavLink>
            <NavLink to="/login" className={renderNavLink}>
              <span className="text-2xl ">Login</span>
            </NavLink>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarGames;
