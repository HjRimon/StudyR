import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logOut");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/regi">Register</NavLink>
      </li>
      <li>
        <NavLink to="/brand">All Assignments</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/bookings">My Submission</NavLink>
          </li>
          <li>
            <NavLink to="/honeymone">Create Assignment</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 font-pec">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-16 w-16 mt-3 md:h-20 md:w-28 lg:h-20 lg:w-auto"
            src="https://i.ibb.co/tbjZFxf/Screenshot-2023-11-04-203448-removebg-preview.png"
          />
          <p className="font-bold text-sm md:text-2xl">StudyR</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-left flex">
              <label tabIndex={0}>
                {user.photoURL ? (
                  <div className="flex text-center md:flex-row items-center">
                    <img className="rounded-full w-10 mr-2" src={user.photoURL} alt="User" />
                    <p className="pr-2">{user.displayName}</p>
                  </div>
                ) : (
                  <div className="flex text-center md:flex-row items-center">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center border border-gray-300">
                      <p className="text-center text-xs">No image</p>
                    </div>
                    <p className="p-2 ">{user.displayName}</p>
                  </div>
                )}
              </label>

              <ul>
                <li>
                  <a onClick={handleLogOut} className="btn ml-1">
                    Sign Out{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
