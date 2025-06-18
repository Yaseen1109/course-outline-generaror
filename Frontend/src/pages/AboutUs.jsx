import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
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
            <h1 className="display-4 fw-bold">About Subject Outline Generator</h1>
            <p className="lead">
              Revolutionizing education with AI-powered outline generation and organized subject breakdowns.
            </p>
          </div>
        </motion.section>

        {/* About Content */}
        <motion.section
          className="py-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="container">
            <h2 className="text-center mb-4">Who We Are</h2>
            <p className="text-center">
              Subject Outline Generator is a smart platform built to help students and educators generate structured outlines for any academic subject using advanced AI models. With our intelligent approach, learners can save time, improve understanding, and prepare smarter.
            </p>
            <div className="row mt-5">
              <motion.div
                className="col-md-4 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-lightbulb-fill display-2 text-primary"></i>
                <h4 className="mt-3">AI-Powered Generation</h4>
                <p>Instantly create well-structured subject outlines using AI and NLP technologies.</p>
              </motion.div>
              <motion.div
                className="col-md-4 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-journal-text display-2 text-primary"></i>
                <h4 className="mt-3">Topic Breakdown</h4>
                <p>Get a clear roadmap of key topics and subtopics for efficient learning and teaching.</p>
              </motion.div>
              <motion.div
                className="col-md-4 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-cloud-arrow-down-fill display-2 text-primary"></i>
                <h4 className="mt-3">Cloud-Based Access</h4>
                <p>Access your outlines anywhere, anytime, securely from our cloud infrastructure.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Mission */}
        <motion.section
          className="py-5 bg-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="container text-center">
            <h2 className="mb-4">Our Mission</h2>
            <p>
              Our mission is to empower learners and educators by simplifying academic content organization through AI. We strive to make studying more effective and productive by turning vast subjects into easy-to-digest outlines.
            </p>
          </div>
        </motion.section>

        {/* Our Team Section */}
        <motion.section
          className="py-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="container">
            <h2 className="text-center mb-4">Our Team</h2>
            <div className="row justify-content-center">
              {/* Team Member 1 */}
              <motion.div
                className="col-md-4 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="team-member-card">
                  <i className="bi bi-person-circle display-2 text-primary"></i>
                  <h4 className="mt-3">Yaseen</h4>
                  <p><strong>Full Stack Developer</strong></p>
                  <p>
                    Yaseen develops robust web interfaces and backend systems, ensuring smooth user experience for AI-powered subject outline creation.
                  </p>
                </div>
              </motion.div>

              {/* Team Member 2 */}
              <motion.div
                className="col-md-4 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="team-member-card">
                  <i className="bi bi-person-circle display-2 text-primary"></i>
                  <h4 className="mt-3">Abdur Rehman</h4>
                  <p><strong>AI Specialist</strong></p>
                  <p>
                    Rehman leads the design of NLP and generative AI models that understand subjects and generate precise topic-wise outlines.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="py-5 bg-primary text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="container">
            <h2 className="mb-4">Try Subject Outline Generator Today!</h2>
            <p className="lead">Start organizing your subjects smartly with the help of AI.</p>
          </div>
        </motion.section>

        <Footer />
      </motion.div>
    </>
  );
};

export default AboutUs;
