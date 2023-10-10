import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <header>
      {/* Desktop and Tablet */}
      <div className="hidden md:flex justify-between items-center py-4">
        <Link to="/">
          <div className="flex items-center gap-2 text-xl cursor-pointer">
            <span className="text-purpleColor">
            </span>
            Home Page
          </div>
        </Link>

        <div className="flex gap-6">
          <Link to="/login">
            <p className="p-3 rounded hover:shadow-lg hover:border-purpleColor cursor-pointer hover:border-2">
              Login
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
