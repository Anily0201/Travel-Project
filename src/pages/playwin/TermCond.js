import React, { useState } from "react";

const TermCond = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    setAccepted(true);
    // Additional logic can be added here, such as storing acceptance in local storage or sending to the server.
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6" data-aos="fade-left">Terms and Conditions</h2>
        <div className="prose prose-lg text-gray-700">
          <h3>Introduction</h3>
          <p>
            These terms and conditions govern your use of our website and services. By accessing or using our website and services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms and conditions, you may not use our website and services.
          </p>
          {/* Additional content */}
          <h3>Privacy Policy</h3>
          <p>
            Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a> to understand how we collect, use, and disclose your personal information.
          </p>
          {/* Additional content */}
          <h3>Acceptance of Terms</h3>
          <p>
            By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, please do not use our website and services.
          </p>
          {/* Additional content */}
          <h3>Changes to Terms and Conditions</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these terms and conditions at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          {/* Additional content */}
          <div className="flex items-center">
            <input type="checkbox" id="acceptCheckbox" className="form-checkbox h-4 w-4 text-blue-600" checked={accepted} onChange={handleAcceptance} />
            <label htmlFor="acceptCheckbox" className="ml-2 text-gray-700">I have read and accept the terms and conditions</label>
          </div>
          {/* Additional content */}
          {accepted && (
            <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
              Thank you for accepting our terms and conditions!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermCond;
