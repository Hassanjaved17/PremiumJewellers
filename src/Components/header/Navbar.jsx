import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import AddToCart from "./AddToCart";

const Navbar = ({ cartItemCount = 0 }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [heartChecked, setHeartChecked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close mobile menu on route change
  const handleMobileNavClick = (path) => {
    setMenuOpen(false);
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [cartOpen]);

  return (
    <>
      <nav className="navbar bg-white shadow-md px-4 py-4 w-full sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-2xl font-bold"
          >
            <Link to="/" className="flex items-center gap-1">
              <span className="text-[#575757] md:text-xl text-sm font-serif">
                Premium
              </span>
              <span className="text-[#0B21BF] md:text-xl text-sm font-serif">
                Jeweller's
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Search */}
            <form onSubmit={handleSearch} className="search-area flex items-center">
              <input
                className="bg-white border border-[#CCCCCC] focus:outline-none focus:border-[#0B21BF] focus:ring-1 focus:ring-[#0B21BF] h-10 px-4 w-64 transition-all"
                placeholder="Search Products"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              <button
                type="submit"
                className="bg-[#0B21BF] p-2.5 text-white hover:bg-[#0919a0] transition-colors"
                aria-label="Submit search"
              >
                <CiSearch size={20} />
              </button>
            </form>

            {/* Navigation Links */}
            <nav className="flex gap-6" aria-label="Main navigation">
              <Link to="/login">
                <motion.span
                  whileHover={{ translateY: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-[#0B21BF] transition-colors cursor-pointer inline-block"
                >
                  Login
                </motion.span>
              </Link>
              <Link to="/register">
                <motion.span
                  whileHover={{ translateY: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-[#0B21BF] transition-colors cursor-pointer inline-block"
                >
                  Register
                </motion.span>
              </Link>
              <Link to="/products">
                <motion.span
                  whileHover={{ translateY: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-[#0B21BF] transition-colors cursor-pointer inline-block"
                >
                  Products
                </motion.span>
              </Link>
            </nav>
          </div>

          {/* Icons & Menu Toggle */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Wishlist Button */}
            <button
              onClick={() => setHeartChecked(!heartChecked)}
              className="p-1 hover:text-[#0B21BF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B21BF] rounded"
              aria-label={heartChecked ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={heartChecked}
            >
              {heartChecked ? (
                <FaHeart className="md:text-2xl text-lg text-red-500" />
              ) : (
                <FaRegHeart className="md:text-2xl text-lg" />
              )}
            </button>

            {/* Cart Button with Badge */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="p-1 hover:text-[#0B21BF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B21BF] rounded relative"
              aria-label={`Shopping cart with ${cartItemCount} items`}
            >
              <IoIosCart className="md:text-2xl text-lg" />
              {cartItemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-1 hover:text-[#0B21BF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B21BF] rounded"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden mt-4 space-y-4 px-4 pb-4"
            >
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="search-area flex">
                <input
                  className="bg-white border focus:outline-none focus:border-[#0B21BF] focus:ring-1 focus:ring-[#0B21BF] h-10 w-full border-[#CCCCCC] px-4 transition-all"
                  placeholder="Search Products"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="bg-[#0B21BF] p-2.5 text-white hover:bg-[#0919a0] transition-colors"
                  aria-label="Submit search"
                >
                  <CiSearch size={20} />
                </button>
              </form>

              {/* Mobile Links */}
              <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
                <Link to="/login" onClick={() => handleMobileNavClick("/login")}>
                  <motion.span
                    whileTap={{ scale: 0.95 }}
                    className="hover:text-[#0B21BF] transition-colors block py-2"
                  >
                    Login
                  </motion.span>
                </Link>
                <Link to="/register" onClick={() => handleMobileNavClick("/register")}>
                  <motion.span
                    whileTap={{ scale: 0.95 }}
                    className="hover:text-[#0B21BF] transition-colors block py-2"
                  >
                    Register
                  </motion.span>
                </Link>
                <Link to="/products" onClick={() => handleMobileNavClick("/products")}>
                  <motion.span
                    whileTap={{ scale: 0.95 }}
                    className="hover:text-[#0B21BF] transition-colors block py-2"
                  >
                    Products
                  </motion.span>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Cart Sidebar */}
      <AddToCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
};

export default Navbar;