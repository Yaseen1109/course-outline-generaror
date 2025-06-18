import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <motion.footer
            className="py-4 bg-dark text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
         <div className="container">
        <div className="row">
  
       <div className="col-md-4 mb-4">
          <h5>About Subject Outline Generator</h5>
            <p>
                Subject Outline Generator is an AI-powered platform designed to help students and educators generate structured outlines based on subject name, difficulty level, and desired number of slides, enabling efficient and guided learning.
            </p>
            </div>


                    <div className="col-md-4 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/about" className="text-white text-decoration-none">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white text-decoration-none">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy" className="text-white text-decoration-none">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-white text-decoration-none">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Shaheed Zulfikar Ali Bhutto Institute of Science and Technology
                            </li>
                            <li>
                                <i className="bi bi-envelope-fill me-2"></i>
                                <a href="mailto:info@outlinegenerator.com" className="text-white text-decoration-none">
                                    Outline Email
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-phone-fill me-2"></i>
                                <a href="tel:+923001234567" className="text-white text-decoration-none">
                                    +92 300 1234567
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} Subject Outline Generator. All rights reserved.
                    </p>
                   
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;