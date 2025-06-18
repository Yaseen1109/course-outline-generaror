import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { generateOutline } from '../services/generatorService';

const GeneratorPage = () => {
  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [slideCount, setSlideCount] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [outline, setOutline] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false); // <- NEW

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subject || !difficulty || !slideCount) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true); // Start loading
    setSubmitted(false); // Reset

    try {
      const payload = {
        subject,
        level: difficulty,
        units: parseInt(slideCount),
      };

      const data = await generateOutline(payload);
      setOutline(data.outline);
      setSummary(data.summary);
      setSubmitted(true);
    } catch (err) {
      console.error("API Error:", err);
      alert("Something went wrong!");
    }

    setLoading(false); // Stop loading
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Navbar />

        <motion.section className="py-5 text-center bg-dark text-white">
          <div className="container">
            <h1 className="display-4 fw-bold">AI Slide Outline Generator</h1>
            <p className="lead">
              Enter the subject, difficulty level, and number of slides to generate an outline.
            </p>
          </div>
        </motion.section>

        <motion.section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Provide Details</h2>
            <div className="row justify-content-center">
              <div className="col-md-6">
                {submitted && outline && (
                  <>
                    <div className="alert alert-success text-center">Outline generated successfully!</div>
                    <div className="mb-4">
                      <h4>🧾 Generated Outline</h4>
                      <pre style={{ whiteSpace: 'pre-wrap' }}>{outline}</pre>
                    </div>
                    <div className="mb-4">
                      <h4>🧠 Summary</h4>
                      <pre style={{ whiteSpace: 'pre-wrap' }}>{summary}</pre>
                    </div>
                  </>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Subject Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Difficulty Level</label>
                    <select
                      className="form-control"
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      required
                    >
                      <option value="">Select Difficulty</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Number of Slides</label>
                    <input
                      type="number"
                      className="form-control"
                      value={slideCount}
                      onChange={(e) => setSlideCount(e.target.value)}
                      required
                      min="1"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={loading}
                  >
                    {loading ? (
                      <motion.div
                        className="spinner-border spinner-border-sm text-light me-2"
                        role="status"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      />
                    ) : null}
                    {loading ? "Generating..." : "Generate Outline"}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </motion.div>
    </>
  );
};

export default GeneratorPage;
