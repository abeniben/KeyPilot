
import React from 'react';
import { Keyboard, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onCommandPaletteOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCommandPaletteOpen }) => {
  return (
    <nav className="bg-white dark:bg-slate-900 border-b shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Keyboard className="h-6 w-6 text-keypilot-purple" />
          <span className="font-mono font-bold text-lg">KeyPilot</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            className="btn btn-sm bg-keypilot-purple hover:bg-keypilot-purple-dark text-white border-none"
            onClick={onCommandPaletteOpen}
            aria-label="Search shortcuts"
          >
            <Search className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">Search Shortcuts</span>
            <span className="ml-1.5 keycap text-xs text-gray-700 dark:text-gray-300">⌘K</span>
          </button>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
