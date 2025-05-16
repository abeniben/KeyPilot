
import React, { useState } from 'react';
import { Shortcut } from '../data/shortcuts';
import { Copy, Check, Bookmark } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShortcutOfTheDayProps {
  shortcut: Shortcut;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

const ShortcutOfTheDay: React.FC<ShortcutOfTheDayProps> = ({ shortcut, isBookmarked, onToggleBookmark }) => {
  const [copied, setCopied] = useState(false);
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

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-keypilot-purple-light dark:from-keypilot-purple-dark/20 via-white dark:via-slate-900 to-white dark:to-slate-800 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center mb-2">
            <span className="bg-keypilot-purple dark:bg-keypilot-purple-dark text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Shortcut of the Day
            </span>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{shortcut.action}</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-300">{shortcut.description}</p>
          
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{shortcut.tool}</span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{shortcut.platform}</span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{shortcut.category}</span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-2">
            {shortcut.shortcut.split('+').map((key, idx) => (
              <div key={idx} className="keycap-large dark:bg-slate-800 dark:border-gray-700 dark:text-gray-100">{key.trim()}</div>
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => onToggleBookmark(shortcut.id)}
              className="inline-flex items-center bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-700 
                        hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-keypilot-purple dark:focus:ring-keypilot-purple-light focus:border-transparent shadow-sm"
            >
              <Bookmark 
                className={`mr-1.5 h-4 w-4 ${isBookmarked ? 'fill-keypilot-purple text-keypilot-purple dark:fill-keypilot-purple-light dark:text-keypilot-purple-light' : 'text-gray-400 dark:text-gray-500'}`} 
              />
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </button>
            
            <button
              onClick={handleCopy}
              className="inline-flex items-center bg-keypilot-purple dark:bg-keypilot-purple-dark px-3 py-2 text-sm font-medium text-white rounded-md 
                        hover:bg-keypilot-purple-dark dark:hover:bg-keypilot-purple focus:outline-none focus:ring-2 focus:ring-keypilot-purple dark:focus:ring-keypilot-purple-light focus:ring-offset-2 shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="mr-1.5 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-1.5 h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortcutOfTheDay;
