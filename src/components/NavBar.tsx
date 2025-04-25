import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  // Common style for NavLink activation
  const activeClassName = "text-white bg-blue-700";
  const inactiveClassName = "text-gray-300 hover:bg-zinc-700 hover:text-white";

  return (
    <nav className="bg-zinc-900/80 backdrop-blur-sm shadow-lg border-b border-blue-600/50 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" 
                alt="FURIA Logo" 
                className="h-8 w-auto filter" // Keep logo white
              />
              <img 
                src="https://furiagg.fbitsstatic.net/sf/img/logo-furia.svg?theme=main&v=202503171541" 
                alt="FURIA Nome" 
                className="h-5 w-auto filter invert" // Keep logo white
              />
              {/* <span className="text-white font-bold">FURIA</span> */}
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div >
            <div className="ml-auto flex items-baseline space-x-2 sm:space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `${isActive ? activeClassName : inactiveClassName} px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/chat" 
                className={({ isActive }) => 
                  `${isActive ? activeClassName : inactiveClassName} px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors`
                }
              >
                ChatBot
              </NavLink>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => 
                  `${isActive ? activeClassName : inactiveClassName} px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors`
                }
              >
                Sobre
              </NavLink>
            </div>
          </div>
          {/* Mobile Menu Button (optional placeholder) */}
          {/* <div className="-mr-2 flex md:hidden"> ... </div> */}
        </div>
      </div>
    </nav>
  );
} 