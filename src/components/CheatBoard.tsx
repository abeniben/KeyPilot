
import React from 'react';
import { Shortcut } from '../data/shortcuts';
import ShortcutList from './ShortcutList';

interface CheatBoardProps {
  title: string;
  shortcuts: Shortcut[];
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
}

const CheatBoard: React.FC<CheatBoardProps> = ({ title, shortcuts, bookmarkedIds, onToggleBookmark }) => {
  if (shortcuts.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{title}</h2>
      <ShortcutList 
        shortcuts={shortcuts} 
        bookmarkedIds={bookmarkedIds} 
        onToggleBookmark={onToggleBookmark} 
      />
    </div>
  );
};

export default CheatBoard;
