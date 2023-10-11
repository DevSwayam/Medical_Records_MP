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
      <div className="flex justify-center gap-10 items-center">
        <Link to="/">
          <div className="flex items-center gap-2 text-lg hover:text-purpleColor cursor-pointer">
            <span className="text-purpleColor">
            </span>
            Home Page
          </div>
        </Link>

        <div className="flex gap-6">
          <Link to="/login">
            <p className="p-3 rounded text-lg hover:text-purpleColor cursor-pointer">
              Login
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
