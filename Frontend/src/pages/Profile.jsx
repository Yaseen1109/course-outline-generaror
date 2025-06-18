import React, { useContext,useEffect } from "react";
import { motion } from "framer-motion";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Profile Header */}
      <motion.section
        className="py-5 text-center bg-dark text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">My Profile</h1>
          <p className="lead">Manage your account details and preferences.</p>
        </div>
      </motion.section>

      {/* Profile Details */}
      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <motion.img
                 src={`https://ui-avatars.com/api/?name=user&background=random`}
                alt="User Avatar"
                className="rounded-circle mb-3"
                style={{ width: "120px", height: "120px" }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h2>User</h2>
              {/* <p className="text-muted">{user.user.email}</p> */}
              <hr />
              <div className="text-start">
                <p><strong>Username:</strong> { "N/A"}</p>
                <p><strong>Email:</strong> { "Not Provided"}</p>
                <p><strong>Joined:</strong> Unknown Date</p>
              </div>
              <motion.button
                className="btn btn-primary mt-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Edit Profile
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Profile;
