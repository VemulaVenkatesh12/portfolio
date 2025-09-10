import React, { useState } from "react";

const HoloCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e: React.MouseEvent) => {
    // Close when clicking the overlay background
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Original Holo Card with expand button */}
      <div className="holo-card">
        <button 
          className="expand-btn" 
          onClick={togglePopup}
          aria-label="Expand metrics"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
        </button>
        
        <div className="holo-content">
          <h3>Impact Metrics</h3>
          <div className="metric">
            <span>Projects Delivered</span>
            <span className="metric-value">127+</span>
          </div>
          <div className="metric">
            <span>Client Satisfaction</span>
            <span className="metric-value">99%</span>
          </div>
          <div className="metric">
            <span>Awards Won</span>
            <span className="metric-value">15</span>
          </div>
          <div className="metric">
            <span>Years Experience</span>
            <span className="metric-value">8+</span>
          </div>
        </div>
      </div>

      {/* Popup Modal with same card styling */}
      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="holo-card popup-card">
            <button 
              className="close-btn" 
              onClick={togglePopup} 
              aria-label="Close popup"
            >
              ×
            </button>
            <div className="holo-content">
              <h3>Impact Metrics</h3>
              <div className="metric">
                <span>Projects Delivered</span>
                <span className="metric-value">127+</span>
              </div>
              <div className="metric">
                <span>Client Satisfaction</span>
                <span className="metric-value">99%</span>
              </div>
              <div className="metric">
                <span>Awards Won</span>
                <span className="metric-value">15</span>
              </div>
              <div className="metric">
                <span>Years Experience</span>
                <span className="metric-value">8+</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HoloCard;
