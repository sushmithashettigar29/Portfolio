import React from "react";
import "../styles/TabButton.css"; // Create this CSS file

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`tab-button ${active ? "active" : ""}`}
    >
      <span className="tab-button-text">{children}</span>
      <div className="tab-underline"></div>
    </button>
  );
};

export default TabButton;
