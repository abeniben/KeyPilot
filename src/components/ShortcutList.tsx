
import React from 'react';
import ShortcutCard from './ShortcutCard';
import { Shortcut } from '../data/shortcuts';

interface ShortcutListProps {
  shortcuts: Shortcut[];
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  title?: string;
  emptyMessage?: string;
}

const ShortcutList: React.FC<ShortcutListProps> = ({ 
  shortcuts, 
  bookmarkedIds, 
  onToggleBookmark, 
  title,
  emptyMessage = "No shortcuts found"
}) => {
  if (shortcuts.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shortcuts.map((shortcut) => (
          <ShortcutCard
            key={shortcut.id}
            shortcut={shortcut}
            isBookmarked={bookmarkedIds.includes(shortcut.id)}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
    </div>
  );
};

export default ShortcutList;
