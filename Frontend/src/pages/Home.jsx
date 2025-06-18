import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />

            {/* Carousel Section */}
            <div id="carouselExample" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://images.unsplash.com/photo-1618393678187-fb258b8ee191?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="d-block w-100"
                            alt="Study Planning"
                            style={{ height: '600px', objectFit: 'cover' }}
                        />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Generate Subject Outlines</h1>
                                <p className="opacity-75">Automatically create structured outlines for any AI-related subject.</p>
                                <p>
                                    <Link to="/register" className="btn btn-lg btn-primary">Try It Now</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="d-block w-100"
                            alt="AI Notes"
                            style={{ height: '600px', objectFit: 'cover' }}
                        />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>AI-Powered Structuring</h1>
                                <p>Create high-quality, generative outlines with topic coverage, subtopics, and more.</p>
                                <p>
                                    <Link to="/login" className="btn btn-lg btn-primary">Learn More</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1651157078535-131ed67fcc57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="d-block w-100"
                            alt="Organized Learning"
                            style={{ height: '600px', objectFit: 'cover' }}
                        />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Stay Organized</h1>
                                <p>Plan your semester or self-study goals with structured outlines.</p>
                                <p>
                                    <Link to="/aboutus" className="btn btn-lg btn-primary">Discover How</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="py-5 text-center bg-primary text-white"
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to AI Subject Outline Generator</h1>
                    <p className="lead">Simplify your AI course preparation with automated outline generation and smart suggestions.</p>
                    <div className="mt-4 d-flex justify-content-center">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="me-2">
                            <Link to="/register" className="btn btn-light btn-lg">Get Started</Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/login" className="btn btn-outline-light btn-lg">Learn More</Link>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                className="py-5 bg-light"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="container">
                    <h2 className="text-center mb-4">Why Choose Our Outline Generator?</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="bi bi-lightbulb display-2 text-primary"></i>
                            <h4>Instant Outlines</h4>
                            <p>Generate detailed course outlines for any AI topic in seconds.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="bi bi-robot display-2 text-primary"></i>
                            <h4>Smart Structuring</h4>
                            <p>Leverage generative AI to organize subjects logically and clearly.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="bi bi-globe display-2 text-primary"></i>
                            <h4>Web-Based Tool</h4>
                            <p>Accessible anytime, anywhere from your browser.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                className="py-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="container">
                    <h2 className="text-center mb-4">What Students Say</h2>
                    <div className="row">
                        <motion.div className="col-md-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">"Helped me prepare a full AI course outline in under 5 minutes!"</p>
                                    <p className="text-muted">- Sarah, CS Student</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">"I used it to plan my AI seminar topics. Super helpful!"</p>
                                    <p className="text-muted">- Umar, AI Enthusiast</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">"Best tool for teachers to create structured content for classes."</p>
                                    <p className="text-muted">- Dr. Amna, Lecturer</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* How It Works Section */}
            <motion.section
                className="py-5 bg-light"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="container">
                    <h2 className="text-center mb-4">How It Works</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="bi bi-journal-plus display-2 text-primary"></i>
                            <h4>1. Enter Subject</h4>
                            <p>Provide the subject name or keywords related to your topic.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="bi bi-cpu display-2 text-primary"></i>
                            <h4>2. AI Generates Outline</h4>
                            <p>Our AI builds an organized, structured outline for your subject.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="bi bi-download display-2 text-primary"></i>
                            <h4>3. Download & Use</h4>
                            <p>Export or copy the outline and use it for teaching, learning, or notes.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                className="py-5 bg-primary text-white text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <div className="container">
                    <h2 className="mb-4">Ready to Generate Your First Outline?</h2>
                    <p className="lead mb-4">Start using our AI-powered Subject Outline Generator now.</p>
                    <Link to="/register" className="btn btn-light btn-lg">Sign Up Now</Link>
                </div>
            </motion.section>

            {/* Footer Section */}
            <Footer />
        </motion.div>
    );
};

export default Home;
