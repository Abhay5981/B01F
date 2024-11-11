import React from 'react';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-gray-200 shadow-md">
      <div className="topheader bg-purple-900 w-full h-10 flex justify-end items-center pr-2">
        <ul className="flex space-x-4 ">
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaLinkedinIn />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaFacebook />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaInstagram />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaTwitter />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaWhatsapp />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaTelegram />
          </li>
        </ul>
      </div>
      
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </div>
        
        <nav className="navbar hidden md:flex bg-slate-100 w-60% h-12 items-center m-4 p-5">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Our Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">IELTS & PTE</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact Us</a></li>
          </ul>
        </nav>
        
        <div className="login">
          <button className="bg-purple-600 text-white px-4 py-2 rounded border-2 hover:bg-purple-300">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
