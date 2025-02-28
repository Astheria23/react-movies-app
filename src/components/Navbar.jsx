import React from "react";
import { useState } from "react";
import { Search, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b border-purple-900/20 backdrop-blur-md bg-black/80"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8H20M4 16H20M6 20L18 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              HussleVerse
            </h1>
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-start gap-6">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/movies"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Movies
            </a>
            <a
              href="/tv-shows"
              className="text-gray-300 hover:text-white transition-colors"
            >
              TV Shows
            </a>
            <a
              href="/watchlist"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Watchlist
            </a>
          </nav>
          {/* Search and Auth Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <a href="/login">
                <Button
                  variant="outline"
                  className="text-purple-400 border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 cursor-pointer"
                >
                  Sign In
                </Button>
              </a>
              <a href="/register">
                <Button className="bg-purple-700 hover:bg-purple-800 cursor-pointer">
                  Sign Up
                </Button>
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gray-950 border-purple-900/20"
              >
                <div className="flex flex-col gap-8 mt-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search movies..."
                      className="bg-gray-900 border border-purple-900/30 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-500 w-full"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>

                  <nav className="flex flex-col gap-4">
                    <a
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
                    >
                      Home
                    </a>
                    <a
                      href="/movies"
                      className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
                    >
                      Movies
                    </a>
                    <a
                      href="/tv-shows"
                      className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
                    >
                      TV Shows
                    </a>
                    <a
                      href="/watchlist"
                      className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
                    >
                      Watchlist
                    </a>
                  </nav>

                  <div className="flex flex-col gap-3 mt-4">
                    <a href="/login" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-purple-900/30"
                      >
                        Sign In
                      </Button>
                    </a>
                    <a href="/register" className="w-full">
                      <Button className="w-full bg-purple-700 hover:bg-purple-800">
                        Sign Up
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </nav>
  );
};

export default Navbar;
