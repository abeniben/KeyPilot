
import React, { useState, useEffect } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Shortcut } from '../data/shortcuts';
import { Copy, CheckCheck, Bookmark, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  shortcuts: Shortcut[];
  onSearch: (query: string) => void;
  searchResults: Shortcut[];
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  shortcuts,
  onSearch,
  searchResults,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % searchResults.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
      } else if (e.key === 'Enter' && searchResults.length > 0) {
        e.preventDefault();
        handleCopy(searchResults[selectedIndex].id, searchResults[selectedIndex].shortcut);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, selectedIndex, searchResults]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleCopy = (id: string, shortcut: string) => {
    navigator.clipboard.writeText(shortcut);
    setCopiedId(id);
    toast({
      title: "Copied to clipboard",
      description: `${shortcut} has been copied to your clipboard.`,
      duration: 2000,
    });
    
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
        <div 
          className="fixed top-[10%] sm:top-[20%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden" 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex items-center justify-between">
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full p-2 pl-4 pr-4 text-base border-none focus:outline-none focus:ring-0 bg-transparent dark:text-white"
                placeholder="Search shortcuts..."
                value={searchValue}
                onChange={handleSearch}
                autoFocus
              />
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close command palette"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto border-t dark:border-slate-700">
            {searchResults.length === 0 ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                No shortcuts found
              </div>
            ) : (
              <div>
                {searchResults.map((shortcut, index) => (
                  <div
                    key={shortcut.id}
                    className={`p-4 flex items-center justify-between border-b last:border-b-0 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer ${
                      selectedIndex === index ? 'bg-gray-50 dark:bg-slate-800' : ''
                    }`}
                    onClick={() => handleCopy(shortcut.id, shortcut.shortcut)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-2">
                        <span className="font-medium dark:text-white">{shortcut.action}</span>
                        <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
                          {shortcut.tool}
                        </span>
                        <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
                          {shortcut.platform}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{shortcut.description}</div>
                    </div>
                    
                    <div className="flex items-center ml-4 space-x-2">
                      <div className="keycap">{shortcut.shortcut}</div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(shortcut.id);
                        }}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full"
                        aria-label={bookmarkedIds.includes(shortcut.id) ? "Remove from bookmarks" : "Add to bookmarks"}
                      >
                        <Bookmark className={`h-4 w-4 ${
                          bookmarkedIds.includes(shortcut.id) ? 'fill-keypilot-purple text-keypilot-purple' : 'text-gray-400 dark:text-gray-500'
                        }`} />
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(shortcut.id, shortcut.shortcut);
                        }}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full"
                        aria-label="Copy shortcut"
                      >
                        {copiedId === shortcut.id ? (
                          <CheckCheck className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="p-3 bg-gray-50 dark:bg-slate-800 border-t dark:border-slate-700 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center">
                <span className="keycap">↑</span>
                <span className="keycap ml-1">↓</span>
                <span className="ml-1">to navigate</span>
              </div>
              
              <div className="flex items-center">
                <span className="keycap">⏎</span>
                <span className="ml-1">to copy</span>
              </div>
              
              <div className="flex items-center">
                <span className="keycap">esc</span>
                <span className="ml-1">to close</span>
              </div>
            </div>
            <div>KeyPilot v1.0</div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CommandPalette;
