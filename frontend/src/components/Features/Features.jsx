import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-box">
          <i className="fas fa-file-alt"></i>
          <h3>Summarize PDF</h3>
          <p>
            Upload legal PDFs and get concise summaries to save time and
            understand documents quickly.
          </p>
        </div>

        <div className="feature-box">
          <i className="fas fa-search"></i>
          <h3>Search Keywords</h3>
          <p>
            Find specific keywords within legal documents to easily locate
            important sections or clauses.
          </p>
        </div>

        <div className="feature-box">
          <i className="fas fa-project-diagram"></i>
          <h3>Visualize Flowchart</h3>
          <p>
            Create and visualize flowcharts of legal documents to better
            understand the structure and flow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
