
import React, { useState, useEffect } from 'react';
import { 
  shortcuts, 
  getRandomShortcut, 
  getUniqueTools, 
  getShortcutsByTool, 
  searchShortcuts,
  Shortcut
} from '../data/shortcuts';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlatformToggle from '../components/PlatformToggle';
import SearchBar from '../components/SearchBar';
import ShortcutOfTheDay from '../components/ShortcutOfTheDay';
import ShortcutList from '../components/ShortcutList';
import CommandPalette from '../components/CommandPalette';
import CheatBoard from '../components/CheatBoard';

import { Keyboard, Search } from 'lucide-react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useIsMobile } from '@/hooks/use-mobile'; 

const Index = () => {
  // Platform state
  const [currentPlatform, setCurrentPlatform] = useLocalStorage<"Windows" | "macOS" | "Linux">("platform", "macOS");
  
  // Shortcut of the day
  const [dailyShortcut, setDailyShortcut] = useState<Shortcut | null>(null);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Shortcut[]>([]);
  
  // Command palette state
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  
  // Bookmarks state
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<string[]>("bookmarks", []);

  // Check if on mobile
  const isMobile = useIsMobile();

  // Initialize shortcuts and daily shortcut
  useEffect(() => {
    // Get a random shortcut for the day
    const randomShortcut = getRandomShortcut();
    setDailyShortcut(randomShortcut);
    
    // Initialize search results with current platform shortcuts
    handleSearch('');
  }, [currentPlatform]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      // If no search query, show all shortcuts for current platform
      setSearchResults([]);
    } else {
      // Search by query and platform
      const results = searchShortcuts(query, currentPlatform);
      setSearchResults(results);
    }
  };

  const handlePlatformChange = (platform: "Windows" | "macOS" | "Linux") => {
    setCurrentPlatform(platform);
    // Refresh search results for new platform
    handleSearch(searchQuery);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prevBookmarks => {
      if (prevBookmarks.includes(id)) {
        return prevBookmarks.filter(bookmarkId => bookmarkId !== id);
      } else {
        return [...prevBookmarks, id];
      }
    });
  };

  // Get bookmarked shortcuts
  const bookmarkedShortcuts = shortcuts.filter(shortcut => 
    bookmarkedIds.includes(shortcut.id) && 
    (shortcut.platform === currentPlatform || shortcut.platform === "All")
  );

  // Get unique tools and their shortcuts
  const tools = getUniqueTools();
  const toolShortcuts = tools.map(tool => ({
    tool,
    shortcuts: getShortcutsByTool(tool).filter(
      shortcut => shortcut.platform === currentPlatform || shortcut.platform === "All"
    )
  }));

  // Toggle command palette with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <Navbar onCommandPaletteOpen={() => setIsCommandPaletteOpen(true)} />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="mb-8 text-center">
          <div className="flex justify-center mb-6">
            <Keyboard className="h-12 w-12 text-keypilot-purple" />
          </div>
          <h1 className="text-4xl font-bold mb-4 dark:text-white">KeyPilot</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover and master keyboard shortcuts for your favorite tools.
          </p>
          
          {/* Platform Toggle - Now positioned here */}
          <div className="flex justify-center mb-8">
            <PlatformToggle activePlatform={currentPlatform} onPlatformChange={handlePlatformChange} />
          </div>
        </section>

        {/* Shortcut of the Day - Moved above the search bar */}
        {dailyShortcut && (
          <section className="mb-8">
            <ShortcutOfTheDay 
              shortcut={dailyShortcut}
              isBookmarked={bookmarkedIds.includes(dailyShortcut.id)}
              onToggleBookmark={toggleBookmark}
            />
          </section>
        )}

        {/* Search Bar - Moved below Shortcut of the Day */}
        <section className="flex justify-center mb-8">
          <SearchBar onSearch={handleSearch} />
        </section>

        {/* Search Results */}
        {searchQuery.trim() !== '' && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Search Results</h2>
            <ShortcutList 
              shortcuts={searchResults}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={toggleBookmark}
              emptyMessage="No shortcuts found matching your search"
            />
          </section>
        )}

        {/* Bookmarks Section */}
        {bookmarkedShortcuts.length > 0 && searchQuery.trim() === '' && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Your Bookmarks</h2>
            <ShortcutList 
              shortcuts={bookmarkedShortcuts}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={toggleBookmark}
            />
          </section>
        )}

        {/* Mini Cheatboards */}
        {searchQuery.trim() === '' && (
          <section>
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Shortcut Cheatboards</h2>
            {toolShortcuts.map(({ tool, shortcuts }) => (
              shortcuts.length > 0 && (
                <CheatBoard
                  key={tool}
                  title={`${tool} Shortcuts`}
                  shortcuts={shortcuts}
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={toggleBookmark}
                />
              )
            ))}
          </section>
        )}
      </main>

      <Footer />

      {/* Floating search button for mobile */}
      {isMobile && (
        <button
          onClick={() => setIsCommandPaletteOpen(true)}
          className="fixed bottom-4 right-4 z-10 p-4 bg-keypilot-purple dark:bg-keypilot-purple-dark text-white rounded-full shadow-lg flex items-center justify-center"
          aria-label="Search shortcuts"
        >
          <Search className="h-6 w-6" />
        </button>
      )}

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        shortcuts={shortcuts}
        onSearch={handleSearch}
        searchResults={searchResults.length > 0 ? searchResults : shortcuts.filter(s => s.platform === currentPlatform || s.platform === "All")}
        bookmarkedIds={bookmarkedIds}
        onToggleBookmark={toggleBookmark}
      />
    </div>
  );
};

export default Index;
