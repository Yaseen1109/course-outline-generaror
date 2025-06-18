import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message Sent:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />

        {/* Hero Section */}
        <motion.section
          className="py-5 text-center bg-dark text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="container">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead">
              We’d love to hear from you! Reach out with any questions or feedback about the Subject Outline Generator.
            </p>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          className="py-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="container">
            <h2 className="text-center mb-4">Get In Touch</h2>
            <div className="row justify-content-center">
              <div className="col-md-6">
                {submitted && (
                  <motion.div
                    className="alert alert-success text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Message sent successfully!
                  </motion.div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="btn btn-primary w-100"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Info */}
        <motion.section
          className="py-5 bg-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="container text-center">
            <h2 className="mb-4">Our Contact Details</h2>
            <div className="row">
              <motion.div
                className="col-md-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-telephone-fill display-4 text-primary"></i>
                <h4 className="mt-3">Call Us</h4>
                <p>+92 300 123456</p>
              </motion.div>
              <motion.div
                className="col-md-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-envelope-fill display-4 text-primary"></i>
                <h4 className="mt-3">Email</h4>
                <p>support@yg.com</p>
              </motion.div>
              <motion.div
                className="col-md-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-geo-alt-fill display-4 text-primary"></i>
                <h4 className="mt-3">Visit Us</h4>
                <p>Shaheed Zulfiqar Ali Bhutto University Islamabad</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-5 bg-primary text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="container">
            <h2 className="mb-4">Have More Questions?</h2>
            <p className="lead">Reach out to us to learn more about Subject Outline Generator.</p>
          </div>
        </motion.section>

        <Footer />
      </motion.div>
    </>
  );
};

export default ContactUs;
