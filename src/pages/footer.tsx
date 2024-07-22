import React from 'react';

const footer: React.FC = () => {
  return (
    <footer className="w-full p-4 text-center text-white">
      <div className="container mx-auto">
        <p className="text-sm">&copy; 2024 Encompass. All rights reserved.</p>
        <nav className="mt-2">
          <a href="#home" className="text-white hover:underline mx-2 ">Home</a>
          <a href="#about" className="text-white hover:underline mx-2">About Us</a>
          <a href="#contact" className="text-white hover:underline mx-2">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default footer;