import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summary, setSummary] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSummarize = async () => {
    if (selectedFile) {
      // Simulate a PDF summarization process
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Add your summarization logic here
      setSummary("This is a simulated summary of the uploaded PDF.");
    }
  };

  return (
    <div className="home-container">
      <div className="animated-text-container">
        <h1 className="animated-text">One stop for legal docs...</h1>
      </div>

      <div className="home-content">
        <h1>Legal Document Summarizer</h1>
        <p>Upload a legal PDF document to generate a concise summary</p>

        <div className="file-upload">
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            accept="application/pdf"
          />
          <label htmlFor="file-input">Choose PDF</label>
        </div>

        <button
          onClick={handleSummarize}
          disabled={!selectedFile}
          className="summarize-btn"
        >
          Summarize
        </button>

        {summary && (
          <div className="summary-container">
            <h2>Summary</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
