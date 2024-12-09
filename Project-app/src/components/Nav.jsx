import React from 'react';
function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      {/* Left Top: Button */}
      <button className="bg-blue-500 px-4  py-2 rounded hover:bg-blue-600">
        Button
      </button>
      {/* Center: Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      {/* Right Top: Logo */}
      <div>
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="w-12 h-12"
        />
      </div>
    </nav>
  );
}
export default Nav
