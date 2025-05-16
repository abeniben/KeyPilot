
import React from 'react';
import { ArrowLeftRight } from 'lucide-react';

type Platform = "Windows" | "macOS" | "Linux";

interface PlatformToggleProps {
  activePlatform: Platform;
  onPlatformChange: (platform: Platform) => void;
}

const PlatformToggle: React.FC<PlatformToggleProps> = ({ activePlatform, onPlatformChange }) => {
  return (
    <div className="flex items-center bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-1 w-fit">
      <button
        onClick={() => onPlatformChange("macOS")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-1.5
          ${activePlatform === "macOS" 
            ? "bg-keypilot-purple dark:bg-keypilot-purple-dark text-white" 
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
      >
        macOS
      </button>
      
      <button
        onClick={() => onPlatformChange("Windows")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-1.5
          ${activePlatform === "Windows" 
            ? "bg-keypilot-purple dark:bg-keypilot-purple-dark text-white" 
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
      >
        Windows
      </button>
      
      <button
        onClick={() => onPlatformChange("Linux")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-1.5
          ${activePlatform === "Linux" 
            ? "bg-keypilot-purple dark:bg-keypilot-purple-dark text-white" 
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
      >
        Linux
      </button>
      
      <div className="ml-2 border-l dark:border-gray-700 pl-2 flex items-center">
        <ArrowLeftRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
};

export default PlatformToggle;
