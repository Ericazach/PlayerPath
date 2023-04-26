import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { NavLink } from "react-router-dom";

function NavbarGames() {
  const renderNavLink = ({ isActive }) =>
    isActive ? "text-[#FF9677]" : "text-[#41436A]";

  return (
    //TODO change user info
    <div>
      <Navbar className="bg-[#974063] ">
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" //TODO user img
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-lg"> Name </span>
              <span className="block truncate text-lg">Email</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <NavLink to="/profile">
                <span className="text-lg">Profile</span>{" "}
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <span className="text-lg">Sign out</span>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/" active={true} className={renderNavLink}>
            <span className="text-2xl ">Home</span>
          </NavLink>
          <NavLink to="/register" className={renderNavLink}>
            <span className="text-2xl ">Register</span>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarGames;
