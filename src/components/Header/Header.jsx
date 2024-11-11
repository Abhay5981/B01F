import React from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { FaMeta } from 'react-icons/fa6';

function Header() {
  return (
    <header className=" shadow-md">
      {/* Top Header with Social Icons */}
      <div className="topheader bg-purple-900 w-full h-10 flex justify-end items-center pr-4">
        <ul className="flex space-x-4">
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer"><FaLinkedinIn /></li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer"><FaMeta /></li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer"><FaInstagram /></li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer"><FaTwitter /></li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer"><FaWhatsapp /></li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer"><FaTelegram /></li>
        </ul>
      </div>

      {/* Main Header Section */}
      <div className="container mx-auto flex justify-between items-center  px-4">
        
        {/* Logo */}
        <div className="logo flex items-center w-[249px] h-[96] object-cover">
          <img src="/images/logo.jpg" alt="Logo" className=" object-conver h-[90px]" />
        </div>
        
        {/* Navbar */}
        <nav className="navbar hidden md:flex bg-slate-100  h-12 items-center m-4 p-4">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Our Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">IELTS & PTE</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact Us</a></li>
          </ul>
        </nav>

        {/* Login Button */}
        <div className="login">
          <button className="bg-purple-600 text-white px-4 py-2 rounded border-2 hover:bg-purple-700">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
