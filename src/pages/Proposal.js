import React from 'react';

function Proposal() {
  return (
    <div>
      <h2 className="section-title">Fellowship Proposal</h2>

      <h3>"atHealthSecure: Privacy-Centric Wellness Tracker"</h3>
      <p>
        <strong>Problem:</strong> Wellness apps often compromise user privacy.
        Users need a secure, encrypted way to log health data and share it selectively.
      </p>
      <p>
        <strong>Solution:</strong> A cross-platform app built with Flutter (Dart)
        and Atsign’s atPlatform SDK to enable end-to-end encryption of wellness logs,
        peer-to-peer data sync, and role-based sharing.
      </p>
      <h4>Tech Stack & Timeline</h4>
      <ul>
        <li><strong>Week 1:</strong> Setup & UI wireframes, SDK integration</li>
        <li><strong>Week 2:</strong> Logging & local encryption</li>
        <li><strong>Week 3:</strong> Sync & role-based sharing</li>
        <li><strong>Week 4:</strong> Testing, documentation, demo preparation</li>
      </ul>
    </div>
  );
}

export default Proposal;
