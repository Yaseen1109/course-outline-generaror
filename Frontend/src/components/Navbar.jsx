import React, { useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { motion } from "framer-motion";
import Login from "../pages/Login";
import Register from "../pages/Register";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [modalType, setModalType] = useState("null");

  return (
    <>
      <motion.nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Outline Generator
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
         
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>

              {user ? (
                <>
           
                  <li className="nav-item">
                    <Link className="nav-link" to="/generator">
                    Generator
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <motion.a
                      className="nav-link dropdown-toggle d-flex align-items-center"
                      href="#"
                      id="profileDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src="https://ui-avatars.com/api/?name=John+Doe&background=random" // Placeholder avatar
                        alt="User Avatar"
                        className="rounded-circle me-2"
                        style={{ width: "35px", height: "35px" }}
                      />
                      {user.name || "User"} {/* Display user's name or "User" */}
                    </motion.a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          View Profile
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/changepassword">
                          Change Password
                        </Link>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <Link
                          className="dropdown-item text-danger"
                          onClick={() => {
                            logout();
                            navigate("/");
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
         
                  <li className="nav-item">
                  {/* <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalType("login")}> */}
                  <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>

           
                  <li className="nav-item">
                  {/* <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalType("register")}> */}
                  <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        
  

{modalType && (
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          {modalType === "login" ? (
                     <div className="modal-body">
                    <Login/>
                   </div>
            ) : (
              <div className="modal-body">
            <Register/>
            </div>
            )}

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
      )}
      </motion.nav>
    </>
  );
};

export default Navbar;