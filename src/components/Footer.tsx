
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; 2025 KeyPilot. All shortcuts at your fingertips.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 font-mono">Tired of the mouse? Let KeyPilot guide you</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
