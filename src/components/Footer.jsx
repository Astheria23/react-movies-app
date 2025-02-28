import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer(){
    return(
    <footer className="bg-black border-t border-purple-900/20 pt-12 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Discover the best movies and TV shows all in one place. Your ultimate entertainment destination.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/movies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Movies
              </a>
            </li>
            <li>
              <a href="/tv-shows" className="text-gray-400 hover:text-white text-sm transition-colors">
                TV Shows
              </a>
            </li>
            <li>
              <a href="/watchlist" className="text-gray-400 hover:text-white text-sm transition-colors">
                Watchlist
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Action
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Comedy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Drama
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Horror
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sci-Fi
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 mt-6 text-center">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} HussleVerse. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}