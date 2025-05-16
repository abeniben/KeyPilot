
import React, { useState } from 'react';
import { Copy, Check, Bookmark, File, Terminal, Scissors, Keyboard } from 'lucide-react';
import { Shortcut } from '../data/shortcuts';
import { useToast } from '@/hooks/use-toast';

interface ShortcutCardProps {
  shortcut: Shortcut;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

const ShortcutCard: React.FC<ShortcutCardProps> = ({ shortcut, isBookmarked, onToggleBookmark }) => {
  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(shortcut.shortcut);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: `${shortcut.shortcut} has been copied to your clipboard.`,
      duration: 2000,
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const getIconForAction = () => {
    const action = shortcut.action.toLowerCase();
    
    if (action.includes('file') || action.includes('open')) return <File className="h-4 w-4" />;
    if (action.includes('terminal')) return <Terminal className="h-4 w-4" />;
    if (action.includes('cut') || action.includes('delete')) return <Scissors className="h-4 w-4" />;
    
    // Default icon
    return <Keyboard className="h-4 w-4" />;
  };

  return (
    <div 
      className={`terminal-card cursor-pointer ${showDetails ? 'border-keypilot-purple' : ''}`}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <span className="p-1.5 rounded-md bg-keypilot-purple/10 text-keypilot-purple">
            {getIconForAction()}
          </span>
          <h3 className="font-medium text-gray-900 dark:text-white">{shortcut.action}</h3>
        </div>

        <div className="flex items-center space-x-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(shortcut.id);
            }}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark 
              className={`h-4 w-4 ${isBookmarked ? 'fill-keypilot-purple text-keypilot-purple' : 'text-gray-400'}`} 
            />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Copy shortcut"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center space-x-2">
        <div className="keycap-purple dark:keycap-dark">{shortcut.shortcut}</div>
        <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
          {shortcut.platform}
        </span>
        <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
          {shortcut.tool}
        </span>
      </div>

      {showDetails && (
        <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 animate-fade-in">
          <p>{shortcut.description}</p>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span>Category: {shortcut.category}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortcutCard;
