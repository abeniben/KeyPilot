export interface Shortcut {
  id: string;
  tool: string;
  category: string;
  platform: "Windows" | "macOS" | "Linux" | "All" | "iPadOS" | "Android";
  action: string;
  shortcut: string;
  description?: string;
}

export const shortcuts: Shortcut[] = [
  // Development & Programming
  {
    id: "vscode-open-file-win",
    tool: "VS Code",
    category: "File Management",
    platform: "Windows",
    action: "Open file",
    shortcut: "Ctrl + P",
    description: "Quickly navigate to any file in the project by typing its name."
  },
  {
    id: "vscode-open-file-mac",
    tool: "VS Code",
    category: "File Management",
    platform: "macOS",
    action: "Open file",
    shortcut: "Cmd + P",
    description: "Search and open any file in your project using a quick search bar."
  },
  {
    id: "vscode-toggle-terminal-all",
    tool: "VS Code",
    category: "Terminal",
    platform: "All",
    action: "Toggle terminal",
    shortcut: "Ctrl + `",
    description: "Show or hide the integrated terminal for running commands."
  },
  {
    id: "vscode-comment-line-win",
    tool: "VS Code",
    category: "Editing",
    platform: "Windows",
    action: "Comment line",
    shortcut: "Ctrl + /",
    description: "Toggle line comment for the selected line or block of code."
  },
  {
    id: "vscode-comment-line-mac",
    tool: "VS Code",
    category: "Editing",
    platform: "macOS",
    action: "Comment line",
    shortcut: "Cmd + /",
    description: "Comment or uncomment the selected line(s) in your code."
  },
  {
    id: "vscode-find-replace-all",
    tool: "VS Code",
    category: "Editing",
    platform: "All",
    action: "Find and replace",
    shortcut: "Ctrl + H",
    description: "Open the find and replace panel to search and modify text in the current file."
  },
  {
    id: "vscode-goto-line-win",
    tool: "VS Code",
    category: "Navigation",
    platform: "Windows",
    action: "Go to line",
    shortcut: "Ctrl + G",
    description: "Jump to a specific line number in the current file."
  },
  {
    id: "vscode-goto-line-mac",
    tool: "VS Code",
    category: "Navigation",
    platform: "macOS",
    action: "Go to line",
    shortcut: "Cmd + G",
    description: "Navigate directly to a specified line in the active editor."
  },
  {
    id: "vscode-fold-code-all",
    tool: "VS Code",
    category: "Editing",
    platform: "All",
    action: "Fold code",
    shortcut: "Ctrl + Shift + [",
    description: "Collapse a code block or region to make the file easier to navigate."
  },
  {
    id: "vscode-unfold-code-all",
    tool: "VS Code",
    category: "Editing",
    platform: "All",
    action: "Unfold code",
    shortcut: "Ctrl + Shift + ]",
    description: "Expand a collapsed code block or region."
  },
  {
    id: "vscode-duplicate-line-win",
    tool: "VS Code",
    category: "Editing",
    platform: "Windows",
    action: "Duplicate line",
    shortcut: "Ctrl + Shift + D",
    description: "Copy the current line or selection and paste it below."
  },
  {
    id: "vscode-duplicate-line-mac",
    tool: "VS Code",
    category: "Editing",
    platform: "macOS",
    action: "Duplicate line",
    shortcut: "Cmd + Shift + D",
    description: "Duplicate the selected line or block without using the clipboard."
  },
  {
    id: "vscode-run-code-all",
    tool: "VS Code",
    category: "Execution",
    platform: "All",
    action: "Run code",
    shortcut: "Ctrl + Alt + N",
    description: "Execute the current script or file using an installed extension like Code Runner."
  },
  {
    id: "vscode-open-settings-win",
    tool: "VS Code",
    category: "Settings",
    platform: "Windows",
    action: "Open settings",
    shortcut: "Ctrl + ,",
    description: "Access the settings panel to customize VS Code."
  },
  {
    id: "vscode-open-settings-mac",
    tool: "VS Code",
    category: "Settings",
    platform: "macOS",
    action: "Open settings",
    shortcut: "Cmd + ,",
    description: "Open the settings menu to configure editor preferences."
  },
  {
    id: "vscode-toggle-sidebar-all",
    tool: "VS Code",
    category: "Interface",
    platform: "All",
    action: "Toggle sidebar",
    shortcut: "Ctrl + B",
    description: "Show or hide the sidebar containing file explorer and other panels."
  },
  {
    id: "vscode-zen-mode-all",
    tool: "VS Code",
    category: "Interface",
    platform: "All",
    action: "Toggle Zen mode",
    shortcut: "Ctrl + K, Z",
    description: "Enter distraction-free mode by hiding all UI elements except the editor."
  },
  {
    id: "vscode-find-in-files-win",
    tool: "VS Code",
    category: "Search",
    platform: "Windows",
    action: "Find in files",
    shortcut: "Ctrl + Shift + F",
    description: "Search across all files in the project for a specific term."
  },
  {
    id: "vscode-find-in-files-mac",
    tool: "VS Code",
    category: "Search",
    platform: "macOS",
    action: "Find in files",
    shortcut: "Cmd + Shift + F",
    description: "Perform a project-wide search for text in all files."
  },
  {
    id: "vscode-format-document-all",
    tool: "VS Code",
    category: "Editing",
    platform: "All",
    action: "Format document",
    shortcut: "Alt + Shift + F",
    description: "Auto-format the entire file based on language-specific rules."
  },
  {
    id: "intellij-reformat-code-win",
    tool: "IntelliJ IDEA",
    category: "Editing",
    platform: "Windows",
    action: "Reformat code",
    shortcut: "Ctrl + Alt + L",
    description: "Automatically format the current file to match coding style settings."
  },
  {
    id: "intellij-reformat-code-mac",
    tool: "IntelliJ IDEA",
    category: "Editing",
    platform: "macOS",
    action: "Reformat code",
    shortcut: "Cmd + Opt + L",
    description: "Reorganize code formatting for consistency across the file."
  },
  {
    id: "intellij-find-usages-all",
    tool: "IntelliJ IDEA",
    category: "Search",
    platform: "All",
    action: "Find usages",
    shortcut: "Alt + F7",
    description: "Locate all references to a variable, method, or class in the project."
  },
  {
    id: "intellij-run-debug-win",
    tool: "IntelliJ IDEA",
    category: "Debugging",
    platform: "Windows",
    action: "Run debug",
    shortcut: "Ctrl + Shift + F5",
    description: "Start debugging the current configuration with breakpoints."
  },
  {
    id: "intellij-run-debug-mac",
    tool: "IntelliJ IDEA",
    category: "Debugging",
    platform: "macOS",
    action: "Run debug",
    shortcut: "Cmd + Shift + F5",
    description: "Launch the debugger for the active run configuration."
  },
  {
    id: "intellij-generate-code-all",
    tool: "IntelliJ IDEA",
    category: "Editing",
    platform: "All",
    action: "Generate code",
    shortcut: "Alt + Insert",
    description: "Open a menu to generate constructors, getters, setters, or other code snippets."
  },
  {
    id: "intellij-optimize-imports-win",
    tool: "IntelliJ IDEA",
    category: "Editing",
    platform: "Windows",
    action: "Optimize imports",
    shortcut: "Ctrl + Alt + O",
    description: "Remove unused imports and organize import statements."
  },
  {
    id: "intellij-optimize-imports-mac",
    tool: "IntelliJ IDEA",
    category: "Editing",
    platform: "macOS",
    action: "Optimize imports",
    shortcut: "Cmd + Opt + O",
    description: "Clean up and sort import statements in the current file."
  },
  {
    id: "intellij-toggle-bookmark-all",
    tool: "IntelliJ IDEA",
    category: "Navigation",
    platform: "All",
    action: "Toggle bookmark",
    shortcut: "F11",
    description: "Add or remove a bookmark for quick navigation to a line."
  },
  {
    id: "intellij-quick-fix-all",
    tool: "IntelliJ IDEA",
    category: "Editing",
    platform: "All",
    action: "Quick fix",
    shortcut: "Alt + Enter",
    description: "Show suggested fixes for errors or warnings at the cursor."
  },
  {
    id: "intellij-navigate-back-all",
    tool: "IntelliJ IDEA",
    category: "Navigation",
    platform: "All",
    action: "Navigate back",
    shortcut: "Ctrl + Alt + Left",
    description: "Go back to the previous cursor position in navigation history."
  },
  {
    id: "intellij-navigate-forward-all",
    tool: "IntelliJ IDEA",
    category: "Navigation",
    platform: "All",
    action: "Navigate forward",
    shortcut: "Ctrl + Alt + Right",
    description: "Move forward in the navigation history."
  },
  {
    id: "intellij-run-file-all",
    tool: "IntelliJ IDEA",
    category: "Execution",
    platform: "All",
    action: "Run file",
    shortcut: "Ctrl + Shift + F10",
    description: "Execute the current file or main method."
  },
  {
    id: "eclipse-open-resource-all",
    tool: "Eclipse",
    category: "File Management",
    platform: "All",
    action: "Open resource",
    shortcut: "Ctrl + Shift + R",
    description: "Quickly find and open any file in the project."
  },
  {
    id: "eclipse-quick-fix-win",
    tool: "Eclipse",
    category: "Editing",
    platform: "Windows",
    action: "Quick fix",
    shortcut: "Ctrl + 1",
    description: "Suggest fixes for code issues at the cursor position."
  },
  {
    id: "eclipse-quick-fix-mac",
    tool: "Eclipse",
    category: "Editing",
    platform: "macOS",
    action: "Quick fix",
    shortcut: "Cmd + 1",
    description: "Display code correction suggestions for errors or warnings."
  },
  {
    id: "eclipse-run-debug-all",
    tool: "Eclipse",
    category: "Debugging",
    platform: "All",
    action: "Run debug",
    shortcut: "Ctrl + F11",
    description: "Start the current project in debug mode."
  },
  {
    id: "eclipse-organize-imports-all",
    tool: "Eclipse",
    category: "Editing",
    platform: "All",
    action: "Organize imports",
    shortcut: "Ctrl + Shift + O",
    description: "Sort and remove unnecessary import statements."
  },
  {
    id: "eclipse-toggle-comment-all",
    tool: "Eclipse",
    category: "Editing",
    platform: "All",
    action: "Toggle comment",
    shortcut: "Ctrl + /",
    description: "Comment or uncomment the selected lines of code."
  },
  {
    id: "eclipse-show-outline-all",
    tool: "Eclipse",
    category: "Navigation",
    platform: "All",
    action: "Show outline",
    shortcut: "Ctrl + O",
    description: "Display the structure of the current file for quick navigation."
  },
  {
    id: "eclipse-step-into-all",
    tool: "Eclipse",
    category: "Debugging",
    platform: "All",
    action: "Step into",
    shortcut: "F5",
    description: "Step into a method call during debugging."
  },
  {
    id: "eclipse-step-over-all",
    tool: "Eclipse",
    category: "Debugging",
    platform: "All",
    action: "Step over",
    shortcut: "F6",
    description: "Move to the next line of code without entering methods while debugging."
  },
  {
    id: "eclipse-toggle-breakpoint-all",
    tool: "Eclipse",
    category: "Debugging",
    platform: "All",
    action: "Toggle breakpoint",
    shortcut: "Ctrl + Shift + B",
    description: "Add or remove a breakpoint on the current line for debugging."
  },
  {
    id: "sublime-goto-anything-all",
    tool: "Sublime Text",
    category: "Navigation",
    platform: "All",
    action: "Go to anything",
    shortcut: "Ctrl + P",
    description: "Quickly open files, symbols, or lines by typing their names."
  },
  {
    id: "sublime-toggle-comment-all",
    tool: "Sublime Text",
    category: "Editing",
    platform: "All",
    action: "Toggle comment",
    shortcut: "Ctrl + /",
    description: "Comment or uncomment the selected lines."
  },
  {
    id: "sublime-find-function-all",
    tool: "Sublime Text",
    category: "Navigation",
    platform: "All",
    action: "Find function",
    shortcut: "Ctrl + R",
    description: "Jump to a function or method in the current file."
  },
  {
    id: "sublime-multiple-cursors-all",
    tool: "Sublime Text",
    category: "Editing",
    platform: "All",
    action: "Add multiple cursors",
    shortcut: "Ctrl + Click",
    description: "Place multiple cursors to edit several lines simultaneously."
  },
  {
    id: "sublime-toggle-sidebar-all",
    tool: "Sublime Text",
    category: "Interface",
    platform: "All",
    action: "Toggle sidebar",
    shortcut: "Ctrl + K, B",
    description: "Show or hide the file explorer sidebar."
  },
  {
    id: "sublime-find-in-files-all",
    tool: "Sublime Text",
    category: "Search",
    platform: "All",
    action: "Find in files",
    shortcut: "Ctrl + Shift + F",
    description: "Search for text across all files in the project."
  },
  {
    id: "sublime-duplicate-line-all",
    tool: "Sublime Text",
    category: "Editing",
    platform: "All",
    action: "Duplicate line",
    shortcut: "Ctrl + Shift + D",
    description: "Copy and paste the current line below without using the clipboard."
  },
  {
    id: "vim-exit-insert-all",
    tool: "Vim",
    category: "Editing",
    platform: "All",
    action: "Exit insert mode",
    shortcut: "Esc",
    description: "Return to normal mode from insert mode."
  },
  {
    id: "vim-yank-line-all",
    tool: "Vim",
    category: "Editing",
    platform: "All",
    action: "Yank line",
    shortcut: "yy",
    description: "Copy the current line to the clipboard."
  },
  {
    id: "vim-search-all",
    tool: "Vim",
    category: "Search",
    platform: "All",
    action: "Search",
    shortcut: "/",
    description: "Start a forward search for a pattern in the file."
  },
  {
    id: "vim-replace-all",
    tool: "Vim",
    category: "Editing",
    platform: "All",
    action: "Replace",
    shortcut: ":s",
    description: "Initiate a substitution command to replace text in the current line."
  },
  {
    id: "vim-jump-line-all",
    tool: "Vim",
    category: "Navigation",
    platform: "All",
    action: "Jump to line",
    shortcut: ":number",
    description: "Navigate to a specific line number by entering ':<line number>'."
  },
  {
    id: "vim-delete-line-all",
    tool: "Vim",
    category: "Editing",
    platform: "All",
    action: "Delete line",
    shortcut: "dd",
    description: "Remove the current line and copy it to the clipboard."
  },
  {
    id: "vim-undo-all",
    tool: "Vim",
    category: "Editing",
    platform: "All",
    action: "Undo",
    shortcut: "u",
    description: "Revert the last change made in the file."
  },
  {
    id: "vim-redo-all",
    tool: "Vim",
    category: "Editing",
    platform: "All",
    action: "Redo",
    shortcut: "Ctrl + R",
    description: "Reapply the last undone change."
  },
  {
    id: "vim-save-quit-all",
    tool: "Vim",
    category: "File Management",
    platform: "All",
    action: "Save and quit",
    shortcut: ":wq",
    description: "Write changes to the file and exit Vim."
  },
  {
    id: "jupyter-add-cell-below-all",
    tool: "Jupyter Notebooks",
    category: "Editing",
    platform: "All",
    action: "Add cell below",
    shortcut: "Ctrl + B",
    description: "Insert a new cell below the current one in the notebook."
  },
  {
    id: "jupyter-delete-cell-all",
    tool: "Jupyter Notebooks",
    category: "Editing",
    platform: "All",
    action: "Delete cell",
    shortcut: "D, D",
    description: "Remove the currently selected cell (press D twice)."
  },
  {
    id: "jupyter-run-all-cells-all",
    tool: "Jupyter Notebooks",
    category: "Execution",
    platform: "All",
    action: "Run all cells",
    shortcut: "Ctrl + F9",
    description: "Execute all cells in the notebook from top to bottom."
  },
  {
    id: "jupyter-toggle-output-all",
    tool: "Jupyter Notebooks",
    category: "Interface",
    platform: "All",
    action: "Toggle output",
    shortcut: "Ctrl + Shift + O",
    description: "Show or hide the output of the selected cell."
  },
  {
    id: "jupyter-change-to-code-all",
    tool: "Jupyter Notebooks",
    category: "Editing",
    platform: "All",
    action: "Change to code cell",
    shortcut: "Y",
    description: "Convert the selected cell to a code cell type."
  },
  {
    id: "jupyter-change-to-markdown-all",
    tool: "Jupyter Notebooks",
    category: "Editing",
    platform: "All",
    action: "Change to markdown cell",
    shortcut: "M",
    description: "Switch the selected cell to markdown for text formatting."
  },
  {
    id: "jupyter-run-cell-all",
    tool: "Jupyter Notebooks",
    category: "Execution",
    platform: "All",
    action: "Run cell",
    shortcut: "Ctrl + Enter",
    description: "Execute the current cell and display its output."
  },
  {
    id: "visual-studio-find-solution-win",
    tool: "Visual Studio",
    category: "Search",
    platform: "Windows",
    action: "Find in solution",
    shortcut: "Ctrl + Shift + F",
    description: "Search for text across all files in the solution."
  },
  {
    id: "visual-studio-toggle-breakpoint-all",
    tool: "Visual Studio",
    category: "Debugging",
    platform: "All",
    action: "Toggle breakpoint",
    shortcut: "F9",
    description: "Add or remove a breakpoint on the current line for debugging."
  },
  {
    id: "visual-studio-step-into-win",
    tool: "Visual Studio",
    category: "Debugging",
    platform: "Windows",
    action: "Step into",
    shortcut: "F11",
    description: "Step into a method or function during debugging."
  },
  {
    id: "visual-studio-step-over-win",
    tool: "Visual Studio",
    category: "Debugging",
    platform: "Windows",
    action: "Step over",
    shortcut: "F10",
    description: "Execute the next line of code without entering methods."
  },
  {
    id: "visual-studio-build-solution-win",
    tool: "Visual Studio",
    category: "Execution",
    platform: "Windows",
    action: "Build solution",
    shortcut: "Ctrl + Shift + B",
    description: "Compile the entire solution to check for errors."
  },
  {
    id: "visual-studio-comment-selection-win",
    tool: "Visual Studio",
    category: "Editing",
    platform: "Windows",
    action: "Comment selection",
    shortcut: "Ctrl + K, C",
    description: "Comment out the selected lines of code."
  },
  {
    id: "visual-studio-uncomment-selection-win",
    tool: "Visual Studio",
    category: "Editing",
    platform: "Windows",
    action: "Uncomment selection",
    shortcut: "Ctrl + K, U",
    description: "Remove comments from the selected lines."
  },
  {
    id: "xcode-clean-build-mac",
    tool: "Xcode",
    category: "Execution",
    platform: "macOS",
    action: "Clean build",
    shortcut: "Cmd + Shift + K",
    description: "Remove build artifacts to resolve compilation issues."
  },
  {
    id: "xcode-show-navigator-mac",
    tool: "Xcode",
    category: "Interface",
    platform: "macOS",
    action: "Show navigator",
    shortcut: "Cmd + 0",
    description: "Display the project navigator for file and folder access."
  },
  {
    id: "xcode-run-tests-mac",
    tool: "Xcode",
    category: "Execution",
    platform: "macOS",
    action: "Run tests",
    shortcut: "Cmd + U",
    description: "Execute all unit tests in the project."
  },
  {
    id: "xcode-toggle-debug-mac",
    tool: "Xcode",
    category: "Debugging",
    platform: "macOS",
    action: "Toggle debug area",
    shortcut: "Cmd + Shift + Y",
    description: "Show or hide the debug console and variables view."
  },
  {
    id: "xcode-comment-line-mac",
    tool: "Xcode",
    category: "Editing",
    platform: "macOS",
    action: "Comment line",
    shortcut: "Cmd + /",
    description: "Toggle comments for the selected line or block."
  },
  {
    id: "xcode-build-project-mac",
    tool: "Xcode",
    category: "Execution",
    platform: "macOS",
    action: "Build project",
    shortcut: "Cmd + B",
    description: "Compile the project without running it."
  },
  {
    id: "atom-find-project-all",
    tool: "Atom",
    category: "Search",
    platform: "All",
    action: "Find in project",
    shortcut: "Ctrl + Shift + F",
    description: "Search for text across all files in the project."
  },
  {
    id: "atom-toggle-git-all",
    tool: "Atom",
    category: "Version Control",
    platform: "All",
    action: "Toggle git tab",
    shortcut: "Ctrl + Shift + 9",
    description: "Open the git panel for version control tasks."
  },
  {
    id: "atom-new-file-all",
    tool: "Atom",
    category: "File Management",
    platform: "All",
    action: "New file",
    shortcut: "Ctrl + N",
    description: "Create a new file in the current project."
  },
  {
    id: "atom-toggle-tree-view-all",
    tool: "Atom",
    category: "Interface",
    platform: "All",
    action: "Toggle tree view",
    shortcut: "Ctrl + \\",
    description: "Show or hide the file explorer tree view."
  },
  {
    id: "atom-comment-line-all",
    tool: "Atom",
    category: "Editing",
    platform: "All",
    action: "Comment line",
    shortcut: "Ctrl + /",
    description: "Toggle line comments for the selected code."
  },
  {
    id: "terminal-kill-process-all",
    tool: "Terminal",
    category: "Terminal",
    platform: "All",
    action: "Kill process",
    shortcut: "Ctrl + C",
    description: "Stop the currently running command or process."
  },
  {
    id: "terminal-history-up-all",
    tool: "Terminal",
    category: "Navigation",
    platform: "All",
    action: "Previous command",
    shortcut: "Up",
    description: "Cycle through previously executed commands."
  },
  {
    id: "terminal-new-tab-all",
    tool: "Terminal",
    category: "Interface",
    platform: "All",
    action: "New tab",
    shortcut: "Ctrl + T",
    description: "Open a new terminal tab in the same window."
  },
  {
    id: "terminal-clear-screen-all",
    tool: "Terminal",
    category: "Interface",
    platform: "All",
    action: "Clear screen",
    shortcut: "Ctrl + L",
    description: "Clear the terminal display while preserving command history."
  },
  {
    id: "terminal-new-window-all",
    tool: "Terminal",
    category: "Interface",
    platform: "All",
    action: "New window",
    shortcut: "Ctrl + Shift + T",
    description: "Open a new terminal window."
  },

  // Education & Productivity
  {
    id: "google-docs-bold-win",
    tool: "Google Docs",
    category: "Editing",
    platform: "Windows",
    action: "Bold selected text",
    shortcut: "Ctrl + B",
    description: "Apply bold formatting to the selected text."
  },
  {
    id: "google-docs-bold-mac",
    tool: "Google Docs",
    category: "Editing",
    platform: "macOS",
    action: "Bold selected text",
    shortcut: "Cmd + B",
    description: "Make the selected text bold for emphasis."
  },
  {
    id: "google-docs-italic-win",
    tool: "Google Docs",
    category: "Editing",
    platform: "Windows",
    action: "Italicize selected text",
    shortcut: "Ctrl + I",
    description: "Apply italic formatting to the selected text."
  },
  {
    id: "google-docs-italic-mac",
    tool: "Google Docs",
    category: "Editing",
    platform: "macOS",
    action: "Italicize selected text",
    shortcut: "Cmd + I",
    description: "Italicize the selected text for stylistic effect."
  },
  {
    id: "google-docs-insert-link-all",
    tool: "Google Docs",
    category: "Editing",
    platform: "All",
    action: "Insert link",
    shortcut: "Ctrl + K",
    description: "Add a hyperlink to the selected text or cursor position."
  },
  {
    id: "google-docs-insert-comment-all",
    tool: "Google Docs",
    category: "Collaboration",
    platform: "All",
    action: "Insert comment",
    shortcut: "Ctrl + Alt + M",
    description: "Add a comment to the selected text for collaboration."
  },
  {
    id: "google-docs-align-center-all",
    tool: "Google Docs",
    category: "Editing",
    platform: "All",
    action: "Align center",
    shortcut: "Ctrl + Shift + E",
    description: "Center-align the selected text or paragraph."
  },
  {
    id: "google-docs-undo-all",
    tool: "Google Docs",
    category: "Editing",
    platform: "All",
    action: "Undo",
    shortcut: "Ctrl + Z",
    description: "Revert the last action performed in the document."
  },
  {
    id: "google-docs-redo-all",
    tool: "Google Docs",
    category: "Editing",
    platform: "All",
    action: "Redo",
    shortcut: "Ctrl + Y",
    description: "Reapply the last undone action."
  },
  {
    id: "google-docs-insert-table-all",
    tool: "Google Docs",
    category: "Editing",
    platform: "All",
    action: "Insert table",
    shortcut: "Ctrl + Shift + T",
    description: "Insert a table at the cursor position for structured data."
  },
  {
    id: "google-docs-word-count-all",
    tool: "Google Docs",
    category: "Tools",
    platform: "All",
    action: "Word count",
    shortcut: "Ctrl + Shift + C",
    description: "Display the word count and other document statistics."
  },
  {
    id: "google-slides-next-slide-all",
    tool: "Google Slides",
    category: "Navigation",
    platform: "All",
    action: "Next slide",
    shortcut: "Right",
    description: "Move to the next slide in the presentation."
  },
  {
    id: "google-slides-start-presentation-all",
    tool: "Google Slides",
    category: "Presentation",
    platform: "All",
    action: "Start presentation",
    shortcut: "Ctrl + F5",
    description: "Begin the slideshow from the first slide."
  },
  {
    id: "google-slides-insert-image-all",
    tool: "Google Slides",
    category: "Editing",
    platform: "All",
    action: "Insert image",
    shortcut: "Ctrl + M",
    description: "Add an image to the current slide."
  },
  {
    id: "google-slides-duplicate-slide-all",
    tool: "Google Slides",
    category: "Editing",
    platform: "All",
    action: "Duplicate slide",
    shortcut: "Ctrl + D",
    description: "Create a copy of the current slide."
  },
  {
    id: "google-slides-previous-slide-all",
    tool: "Google Slides",
    category: "Navigation",
    platform: "All",
    action: "Previous slide",
    shortcut: "Left",
    description: "Navigate to the previous slide in the deck."
  },
  {
    id: "google-slides-insert-text-box-all",
    tool: "Google Slides",
    category: "Editing",
    platform: "All",
    action: "Insert text box",
    shortcut: "Ctrl + Shift + X",
    description: "Add a text box to the slide for custom text placement."
  },
  {
    id: "google-sheets-freeze-row-win",
    tool: "Google Sheets",
    category: "Editing",
    platform: "Windows",
    action: "Freeze row",
    shortcut: "Alt + W + R",
    description: "Keep the selected row visible while scrolling vertically."
  },
  {
    id: "google-sheets-freeze-row-mac",
    tool: "Google Sheets",
    category: "Editing",
    platform: "macOS",
    action: "Freeze row",
    shortcut: "Opt + W + R",
    description: "Lock the selected row in place during vertical scrolling."
  },
  {
    id: "google-sheets-insert-column-all",
    tool: "Google Sheets",
    category: "Editing",
    platform: "All",
    action: "Insert column",
    shortcut: "Ctrl + Shift + +",
    description: "Add a new column to the right of the selected cell."
  },
  {
    id: "google-sheets-sum-function-all",
    tool: "Google Sheets",
    category: "Editing",
    platform: "All",
    action: "Insert SUM function",
    shortcut: "Alt + =",
    description: "Quickly insert a SUM formula for the selected range."
  },
  {
    id: "google-sheets-format-number-all",
    tool: "Google Sheets",
    category: "Editing",
    platform: "All",
    action: "Format as number",
    shortcut: "Ctrl + Shift + 1",
    description: "Apply number formatting to the selected cells."
  },
  {
    id: "google-sheets-insert-chart-all",
    tool: "Google Sheets",
    category: "Editing",
    platform: "All",
    action: "Insert chart",
    shortcut: "Ctrl + Shift + C",
    description: "Create a chart based on the selected data range."
  },
  {
    id: "google-sheets-undo-all",
    tool: "Google Sheets",
    category: "Editing",
    platform: "All",
    action: "Undo",
    shortcut: "Ctrl + Z",
    description: "Revert the last action in the spreadsheet."
  },
  {
    id: "microsoft-word-insert-comment-win",
    tool: "Microsoft Word",
    category: "Collaboration",
    platform: "Windows",
    action: "Insert comment",
    shortcut: "Ctrl + Alt + M",
    description: "Add a comment to the selected text for review."
  },
  {
    id: "microsoft-word-insert-comment-mac",
    tool: "Microsoft Word",
    category: "Collaboration",
    platform: "macOS",
    action: "Insert comment",
    shortcut: "Cmd + Opt + M",
    description: "Insert a comment on the selected text or cursor position."
  },
  {
    id: "microsoft-word-track-changes-win",
    tool: "Microsoft Word",
    category: "Collaboration",
    platform: "Windows",
    action: "Toggle track changes",
    shortcut: "Ctrl + Shift + E",
    description: "Enable or disable tracking of edits in the document."
  },
  {
    id: "microsoft-word-track-changes-mac",
    tool: "Microsoft Word",
    category: "Collaboration",
    platform: "macOS",
    action: "Toggle track changes",
    shortcut: "Cmd + Shift + E",
    description: "Turn on or off the tracking of document changes."
  },
  {
    id: "microsoft-word-insert-footnote-all",
    tool: "Microsoft Word",
    category: "Editing",
    platform: "All",
    action: "Insert footnote",
    shortcut: "Ctrl + Alt + F",
    description: "Add a footnote at the cursor position for references."
  },
  {
    id: "microsoft-word-save-as-win",
    tool: "Microsoft Word",
    category: "File Management",
    platform: "Windows",
    action: "Save as",
    shortcut: "F12",
    description: "Open the Save As dialog to save the document with a new name or format."
  },
  {
    id: "microsoft-word-save-as-mac",
    tool: "Microsoft Word",
    category: "File Management",
    platform: "macOS",
    action: "Save as",
    shortcut: "Cmd + Shift + S",
    description: "Save the document under a new name or in a different format."
  },
  {
    id: "microsoft-word-find-win",
    tool: "Microsoft Word",
    category: "Search",
    platform: "Windows",
    action: "Find",
    shortcut: "Ctrl + F",
    description: "Open the find tool to search for text in the document."
  },
  {
    id: "powerpoint-duplicate-slide-win",
    tool: "PowerPoint",
    category: "Editing",
    platform: "Windows",
    action: "Duplicate slide",
    shortcut: "Ctrl + D",
    description: "Create a copy of the current slide in the presentation."
  },
  {
    id: "powerpoint-duplicate-slide-mac",
    tool: "PowerPoint",
    category: "Editing",
    platform: "macOS",
    action: "Duplicate slide",
    shortcut: "Cmd + D",
    description: "Duplicate the selected slide to reuse its content."
  },
  {
    id: "powerpoint-start-slideshow-all",
    tool: "PowerPoint",
    category: "Presentation",
    platform: "All",
    action: "Start slideshow",
    shortcut: "F5",
    description: "Begin the presentation from the first slide."
  },
  {
    id: "powerpoint-insert-shape-all",
    tool: "PowerPoint",
    category: "Editing",
    platform: "All",
    action: "Insert shape",
    shortcut: "Alt + N + SH",
    description: "Add a shape to the current slide for diagrams or decoration."
  },
  {
    id: "powerpoint-next-slide-all",
    tool: "PowerPoint",
    category: "Navigation",
    platform: "All",
    action: "Next slide",
    shortcut: "Right",
    description: "Move to the next slide during editing or presentation."
  },
  {
    id: "powerpoint-previous-slide-all",
    tool: "PowerPoint",
    category: "Navigation",
    platform: "All",
    action: "Previous slide",
    shortcut: "Left",
    description: "Navigate to the previous slide in the deck."
  },
  {
    id: "excel-insert-chart-win",
    tool: "Excel",
    category: "Editing",
    platform: "Windows",
    action: "Insert chart",
    shortcut: "Alt + F1",
    description: "Create a default chart from the selected data."
  },
  {
    id: "excel-insert-chart-mac",
    tool: "Excel",
    category: "Editing",
    platform: "macOS",
    action: "Insert chart",
    shortcut: "Cmd + F1",
    description: "Generate a chart based on the selected cells."
  },
  {
    id: "excel-autosum-all",
    tool: "Excel",
    category: "Editing",
    platform: "All",
    action: "AutoSum",
    shortcut: "Alt + =",
    description: "Insert a SUM formula for the adjacent range of cells."
  },
  {
    id: "excel-insert-row-all",
    tool: "Excel",
    category: "Editing",
    platform: "All",
    action: "Insert row",
    shortcut: "Ctrl + Shift + +",
    description: "Add a new row above the selected cell."
  },
  {
    id: "excel-filter-toggle-all",
    tool: "Excel",
    category: "Editing",
    platform: "All",
    action: "Toggle filter",
    shortcut: "Ctrl + Shift + L",
    description: "Enable or disable filters for the selected data range."
  },
  {
    id: "excel-freeze-panes-all",
    tool: "Excel",
    category: "Editing",
    platform: "All",
    action: "Freeze panes",
    shortcut: "Alt + W + F",
    description: "Lock rows or columns in place while scrolling."
  },
  {
    id: "excel-undo-all",
    tool: "Excel",
    category: "Editing",
    platform: "All",
    action: "Undo",
    shortcut: "Ctrl + Z",
    description: "Revert the last action in the spreadsheet."
  },
  {
    id: "notion-toggle-sidebar-all",
    tool: "Notion",
    category: "Interface",
    platform: "All",
    action: "Toggle sidebar",
    shortcut: "Ctrl + \\",
    description: "Show or hide the sidebar for workspace navigation."
  },
  {
    id: "notion-insert-block-all",
    tool: "Notion",
    category: "Editing",
    platform: "All",
    action: "Insert block",
    shortcut: "Ctrl + /",
    description: "Add a new content block (e.g., text, image, or table) at the cursor."
  },
  {
    id: "notion-new-database-all",
    tool: "Notion",
    category: "Editing",
    platform: "All",
    action: "New database",
    shortcut: "Ctrl + Shift + N",
    description: "Create a new database for structured data like tables or boards."
  },
  {
    id: "notion-toggle-dark-mode-all",
    tool: "Notion",
    category: "Interface",
    platform: "All",
    action: "Toggle dark mode",
    shortcut: "Ctrl + Shift + L",
    description: "Switch between light and dark themes for better visibility."
  },
  {
    id: "notion-duplicate-block-all",
    tool: "Notion",
    category: "Editing",
    platform: "All",
    action: "Duplicate block",
    shortcut: "Ctrl + D",
    description: "Copy the selected block and paste it below."
  },
  {
    id: "obsidian-open-graph-all",
    tool: "Obsidian",
    category: "Interface",
    platform: "All",
    action: "Open graph view",
    shortcut: "Ctrl + G",
    description: "Display a visual graph of note connections."
  },
  {
    id: "obsidian-quick-switcher-all",
    tool: "Obsidian",
    category: "Navigation",
    platform: "All",
    action: "Quick switcher",
    shortcut: "Ctrl + O",
    description: "Search and open any note quickly by name."
  },
  {
    id: "obsidian-new-vault-all",
    tool: "Obsidian",
    category: "File Management",
    platform: "All",
    action: "New vault",
    shortcut: "Ctrl + Shift + V",
    description: "Create a new vault to organize a separate set of notes."
  },
  {
    id: "obsidian-toggle-pin-all",
    tool: "Obsidian",
    category: "Interface",
    platform: "All",
    action: "Toggle pin",
    shortcut: "Ctrl + P",
    description: "Pin or unpin the current note for quick access."
  },
  {
    id: "zotero-new-item-all",
    tool: "Zotero",
    category: "Editing",
    platform: "All",
    action: "New item",
    shortcut: "Ctrl + N",
    description: "Add a new reference or item to the library."
  },
  {
    id: "zotero-export-bibliography-all",
    tool: "Zotero",
    category: "Export",
    platform: "All",
    action: "Export bibliography",
    shortcut: "Ctrl + Shift + E",
    description: "Generate a bibliography from selected items in a chosen format."
  },
  {
    id: "zotero-quick-copy-all",
    tool: "Zotero",
    category: "Editing",
    platform: "All",
    action: "Quick copy citation",
    shortcut: "Ctrl + Shift + C",
    description: "Copy a citation to the clipboard in the default format."
  },
  {
    id: "zotero-add-note-all",
    tool: "Zotero",
    category: "Editing",
    platform: "All",
    action: "Add note",
    shortcut: "Ctrl + Shift + N",
    description: "Create a new note attached to the selected item."
  },
  {
    id: "overleaf-toggle-pdf-all",
    tool: "Overleaf",
    category: "Interface",
    platform: "All",
    action: "Toggle PDF view",
    shortcut: "Ctrl + J",
    description: "Switch between code editor and compiled PDF preview."
  },
  {
    id: "overleaf-insert-figure-all",
    tool: "Overleaf",
    category: "Editing",
    platform: "All",
    action: "Insert figure",
    shortcut: "Ctrl + Shift + F",
    description: "Add a figure environment for including images in LaTeX."
  },
  {
    id: "overleaf-insert-table-all",
    tool: "Overleaf",
    category: "Editing",
    platform: "All",
    action: "Insert table",
    shortcut: "Ctrl + Shift + T",
    description: "Insert a table environment for structured data in LaTeX."
  },
  {
    id: "overleaf-compile-all",
    tool: "Overleaf",
    category: "Execution",
    platform: "All",
    action: "Compile document",
    shortcut: "Ctrl + Enter",
    description: "Compile the LaTeX document to generate the PDF."
  },

  // Workplace & Collaboration
  {
    id: "microsoft-teams-new-chat-win",
    tool: "Microsoft Teams",
    category: "Communication",
    platform: "Windows",
    action: "New chat",
    shortcut: "Ctrl + N",
    description: "Start a new chat with a person or group."
  },
  {
    id: "microsoft-teams-new-chat-mac",
    tool: "Microsoft Teams",
    category: "Communication",
    platform: "macOS",
    action: "New chat",
    shortcut: "Cmd + N",
    description: "Initiate a new chat conversation."
  },
  {
    id: "microsoft-teams-mute-win",
    tool: "Microsoft Teams",
    category: "Communication",
    platform: "Windows",
    action: "Toggle mute",
    shortcut: "Ctrl + Shift + M",
    description: "Mute or unmute your microphone during a meeting."
  },
  {
    id: "microsoft-teams-mute-mac",
    tool: "Microsoft Teams",
    category: "Communication",
    platform: "macOS",
    action: "Toggle mute",
    shortcut: "Cmd + Shift + M",
    description: "Turn your microphone on or off in a call."
  },
  {
    id: "microsoft-teams-share-screen-all",
    tool: "Microsoft Teams",
    category: "Collaboration",
    platform: "All",
    action: "Share screen",
    shortcut: "Ctrl + Shift + E",
    description: "Share your screen or a specific window during a meeting."
  },
  {
    id: "microsoft-teams-toggle-video-all",
    tool: "Microsoft Teams",
    category: "Communication",
    platform: "All",
    action: "Toggle video",
    shortcut: "Ctrl + Shift + O",
    description: "Turn your camera on or off during a meeting."
  },
  {
    id: "microsoft-teams-reactions-all",
    tool: "Microsoft Teams",
    category: "Communication",
    platform: "All",
    action: "Open reactions",
    shortcut: "Ctrl + Shift + R",
    description: "Show the reactions panel to send emojis in a meeting."
  },
  {
    id: "slack-jump-channel-all",
    tool: "Slack",
    category: "Navigation",
    platform: "All",
    action: "Jump to channel",
    shortcut: "Ctrl + K",
    description: "Quickly navigate to a channel or direct message."
  },
  {
    id: "slack-mark-unread-all",
    tool: "Slack",
    category: "Communication",
    platform: "All",
    action: "Mark as unread",
    shortcut: "Alt + Click",
    description: "Mark a message as unread to revisit it later."
  },
  {
    id: "slack-set-status-all",
    tool: "Slack",
    category: "Communication",
    platform: "All",
    action: "Set status",
    shortcut: "Ctrl + Shift + Y",
    description: "Update your availability status or custom message."
  },
  {
    id: "slack-toggle-sidebar-all",
    tool: "Slack",
    category: "Interface",
    platform: "All",
    action: "Toggle sidebar",
    shortcut: "Ctrl + .",
    description: "Show or hide the channel and DM sidebar."
  },
  {
    id: "slack-new-message-all",
    tool: "Slack",
    category: "Communication",
    platform: "All",
    action: "New message",
    shortcut: "Ctrl + N",
    description: "Start composing a new message in the current channel."
  },
  {
    id: "slack-upload-file-all",
    tool: "Slack",
    category: "File Management",
    platform: "All",
    action: "Upload file",
    shortcut: "Ctrl + U",
    description: "Open the file upload dialog to share a file."
  },
  {
    id: "zoom-share-screen-win",
    tool: "Zoom",
    category: "Collaboration",
    platform: "Windows",
    action: "Share screen",
    shortcut: "Alt + S",
    description: "Start sharing your screen or an application."
  },
  {
    id: "zoom-share-screen-mac",
    tool: "Zoom",
    category: "Collaboration",
    platform: "macOS",
    action: "Share screen",
    shortcut: "Cmd + S",
    description: "Begin screen sharing in a Zoom meeting."
  },
  {
    id: "zoom-toggle-video-all",
    tool: "Zoom",
    category: "Communication",
    platform: "All",
    action: "Toggle video",
    shortcut: "Alt + V",
    description: "Turn your camera on or off during a meeting."
  },
  {
    id: "zoom-invite-participant-all",
    tool: "Zoom",
    category: "Collaboration",
    platform: "All",
    action: "Invite participant",
    shortcut: "Alt + I",
    description: "Open the invite dialog to add participants to the meeting."
  },
  {
    id: "zoom-mute-all",
    tool: "Zoom",
    category: "Communication",
    platform: "All",
    action: "Toggle mute",
    shortcut: "Alt + M",
    description: "Mute or unmute your microphone in a Zoom call."
  },
  {
    id: "google-meet-camera-toggle-all",
    tool: "Google Meet",
    category: "Communication",
    platform: "All",
    action: "Toggle camera",
    shortcut: "Ctrl + E",
    description: "Turn your webcam on or off during a meeting."
  },
  {
    id: "google-meet-mute-all",
    tool: "Google Meet",
    category: "Communication",
    platform: "All",
    action: "Toggle mute",
    shortcut: "Ctrl + D",
    description: "Mute or unmute your microphone in a Google Meet call."
  },
  {
    id: "google-meet-raise-hand-all",
    tool: "Google Meet",
    category: "Communication",
    platform: "All",
    action: "Raise hand",
    shortcut: "Ctrl + Alt + H",
    description: "Signal to the host that you have a question or comment."
  },
  {
    id: "google-meet-show-captions-all",
    tool: "Google Meet",
    category: "Interface",
    platform: "All",
    action: "Show captions",
    shortcut: "Ctrl + Shift + C",
    description: "Enable or disable live captions for accessibility."
  },
  {
    id: "trello-move-card-all",
    tool: "Trello",
    category: "Task Management",
    platform: "All",
    action: "Move card",
    shortcut: "M",
    description: "Move the selected card to a different list or board."
  },
  {
    id: "trello-due-date-all",
    tool: "Trello",
    category: "Task Management",
    platform: "All",
    action: "Set due date",
    shortcut: "D",
    description: "Assign a due date to the current card."
  },
  {
    id: "trello-add-label-all",
    tool: "Trello",
    category: "Task Management",
    platform: "All",
    action: "Add label",
    shortcut: "L",
    description: "Add a color-coded label to the selected card."
  },
  {
    id: "trello-new-card-all",
    tool: "Trello",
    category: "Task Management",
    platform: "All",
    action: "New card",
    shortcut: "N",
    description: "Create a new card in the current list."
  },
  {
    id: "asana-mark-complete-all",
    tool: "Asana",
    category: "Task Management",
    platform: "All",
    action: "Mark task complete",
    shortcut: "Ctrl + Enter",
    description: "Mark the selected task as completed."
  },
  {
    id: "asana-add-subtask-all",
    tool: "Asana",
    category: "Task Management",
    platform: "All",
    action: "Add subtask",
    shortcut: "Ctrl + /",
    description: "Create a subtask under the current task."
  },
  {
    id: "asana-my-tasks-all",
    tool: "Asana",
    category: "Navigation",
    platform: "All",
    action: "Go to My Tasks",
    shortcut: "Ctrl + M",
    description: "Navigate to your personal task list."
  },
  {
    id: "asana-new-task-all",
    tool: "Asana",
    category: "Task Management",
    platform: "All",
    action: "New task",
    shortcut: "Enter",
    description: "Create a new task in the current project."
  },
  {
    id: "clickup-assign-task-all",
    tool: "ClickUp",
    category: "Task Management",
    platform: "All",
    action: "Assign task",
    shortcut: "A",
    description: "Assign the current task to a team member."
  },
  {
    id: "clickup-set-priority-all",
    tool: "ClickUp",
    category: "Task Management",
    platform: "All",
    action: "Set priority",
    shortcut: "P",
    description: "Assign a priority level to the selected task."
  },
  {
    id: "clickup-new-list-all",
    tool: "ClickUp",
    category: "Task Management",
    platform: "All",
    action: "New list",
    shortcut: "L",
    description: "Create a new list within the current project."
  },
  {
    id: "clickup-toggle-sidebar-all",
    tool: "ClickUp",
    category: "Interface",
    platform: "All",
    action: "Toggle sidebar",
    shortcut: "Ctrl + Shift + S",
    description: "Show or hide the project sidebar."
  },
  {
    id: "outlook-reply-all-win",
    tool: "Outlook",
    category: "Communication",
    platform: "Windows",
    action: "Reply all",
    shortcut: "Ctrl + Shift + R",
    description: "Reply to all recipients of the selected email."
  },
  {
    id: "outlook-reply-all-mac",
    tool: "Outlook",
    category: "Communication",
    platform: "macOS",
    action: "Reply all",
    shortcut: "Cmd + Shift + R",
    description: "Respond to all participants in the email thread."
  },
  {
    id: "outlook-flag-email-all",
    tool: "Outlook",
    category: "Task Management",
    platform: "All",
    action: "Flag email",
    shortcut: "Ctrl + Shift + G",
    description: "Mark the selected email for follow-up."
  },
  {
    id: "outlook-new-meeting-all",
    tool: "Outlook",
    category: "Collaboration",
    platform: "All",
    action: "New meeting",
    shortcut: "Ctrl + Shift + Q",
    description: "Create a new meeting invitation."
  },
  {
    id: "outlook-archive-all",
    tool: "Outlook",
    category: "File Management",
    platform: "All",
    action: "Archive email",
    shortcut: "Ctrl + E",
    description: "Move the selected email to the archive folder."
  },
  {
    id: "gmail-archive-all",
    tool: "Gmail",
    category: "File Management",
    platform: "All",
    action: "Archive email",
    shortcut: "E",
    description: "Move the selected email to the archive, removing it from the inbox."
  },
  {
    id: "gmail-mark-important-all",
    tool: "Gmail",
    category: "Task Management",
    platform: "All",
    action: "Mark as important",
    shortcut: "+",
    description: "Flag the email as important for priority sorting."
  },
  {
    id: "gmail-star-email-all",
    tool: "Gmail",
    category: "Task Management",
    platform: "All",
    action: "Star email",
    shortcut: "S",
    description: "Add a star to the email for quick reference."
  },
  {
    id: "gmail-reply-all",
    tool: "Gmail",
    category: "Communication",
    platform: "All",
    action: "Reply",
    shortcut: "R",
    description: "Reply to the sender of the selected email."
  },
  {
    id: "gmail-compose-all",
    tool: "Gmail",
    category: "Communication",
    platform: "All",
    action: "Compose email",
    shortcut: "C",
    description: "Open a new email composition window."
  },
  {
    id: "calendars-week-view-all",
    tool: "Calendars",
    category: "Interface",
    platform: "All",
    action: "Week view",
    shortcut: "Ctrl + 2",
    description: "Switch the calendar to a weekly view."
  },
  {
    id: "calendars-day-view-all",
    tool: "Calendars",
    category: "Interface",
    platform: "All",
    action: "Day view",
    shortcut: "Ctrl + 1",
    description: "Display the calendar in a daily view."
  },
  {
    id: "calendars-new-event-all",
    tool: "Calendars",
    category: "Task Management",
    platform: "All",
    action: "New event",
    shortcut: "Ctrl + N",
    description: "Create a new calendar event."
  },
  {
    id: "google-drive-new-folder-all",
    tool: "Google Drive",
    category: "File Management",
    platform: "All",
    action: "New folder",
    shortcut: "Shift + F",
    description: "Create a new folder in the current directory."
  },
  {
    id: "google-drive-share-all",
    tool: "Google Drive",
    category: "Collaboration",
    platform: "All",
    action: "Share file",
    shortcut: "Shift + S",
    description: "Open the sharing settings for the selected file or folder."
  },
  {
    id: "google-drive-upload-all",
    tool: "Google Drive",
    category: "File Management",
    platform: "All",
    action: "Upload file",
    shortcut: "U",
    description: "Upload a file from your computer to Google Drive."
  },

  // Design & Creativity
  {
    id: "figma-group-layers-win",
    tool: "Figma",
    category: "Editing",
    platform: "Windows",
    action: "Group layers",
    shortcut: "Ctrl + G",
    description: "Combine selected layers into a group for easier management."
  },
  {
    id: "figma-group-layers-mac",
    tool: "Figma",
    category: "Editing",
    platform: "macOS",
    action: "Group layers",
    shortcut: "Cmd + G",
    description: "Group multiple layers to organize your design."
  },
  {
    id: "figma-zoom-fit-win",
    tool: "Figma",
    category: "Navigation",
    platform: "Windows",
    action: "Zoom to fit",
    shortcut: "Ctrl + 0",
    description: "Adjust the canvas zoom to fit all content on screen."
  },
  {
    id: "figma-zoom-fit-mac",
    tool: "Figma",
    category: "Navigation",
    platform: "macOS",
    action: "Zoom to fit",
    shortcut: "Cmd + 0",
    description: "Zoom the canvas to show all elements in the frame."
  },
  {
    id: "figma-duplicate-all",
    tool: "Figma",
    category: "Editing",
    platform: "All",
    action: "Duplicate selection",
    shortcut: "Ctrl + D",
    description: "Create a copy of the selected layer or artboard."
  },
  {
    id: "figma-toggle-rulers-all",
    tool: "Figma",
    category: "Interface",
    platform: "All",
    action: "Toggle rulers",
    shortcut: "Ctrl + R",
    description: "Show or hide rulers for precise measurements."
  },
  {
    id: "figma-export-all",
    tool: "Figma",
    category: "Export",
    platform: "All",
    action: "Export",
    shortcut: "Ctrl + Shift + E",
    description: "Open the export panel to save selected layers as images."
  },
  {
    id: "figma-toggle-ui-all",
    tool: "Figma",
    category: "Interface",
    platform: "All",
    action: "Toggle UI",
    shortcut: "Ctrl + \\",
    description: "Hide or show the Figma interface for a cleaner workspace."
  },
  {
    id: "photoshop-free-transform-win",
    tool: "Adobe Photoshop",
    category: "Editing",
    platform: "Windows",
    action: "Free transform",
    shortcut: "Ctrl + T",
    description: "Resize, rotate, or skew the selected layer."
  },
  {
    id: "photoshop-free-transform-mac",
    tool: "Adobe Photoshop",
    category: "Editing",
    platform: "macOS",
    action: "Free transform",
    shortcut: "Cmd + T",
    description: "Transform the selected layer with scaling or rotation."
  },
  {
    id: "photoshop-new-layer-win",
    tool: "Adobe Photoshop",
    category: "Editing",
    platform: "Windows",
    action: "New layer",
    shortcut: "Ctrl + Shift + N",
    description: "Create a new layer in the layers panel."
  },
  {
    id: "photoshop-new-layer-mac",
    tool: "Adobe Photoshop",
    category: "Editing",
    platform: "macOS",
    action: "New layer",
    shortcut: "Cmd + Shift + N",
    description: "Add a new layer for separate editing."
  },
  {
    id: "photoshop-merge-layers-all",
    tool: "Adobe Photoshop",
    category: "Editing",
    platform: "All",
    action: "Merge layers",
    shortcut: "Ctrl + E",
    description: "Combine selected layers into a single layer."
  },
  {
    id: "photoshop-toggle-brush-all",
    tool: "Adobe Photoshop",
    category: "Tools",
    platform: "All",
    action: "Toggle brush tool",
    shortcut: "B",
    description: "Select the brush tool for painting or drawing."
  },
  {
    id: "photoshop-undo-all",
    tool: "Adobe Photoshop",
    category: "Editing",
    platform: "All",
    action: "Undo",
    shortcut: "Ctrl + Z",
    description: "Revert the last action in the canvas."
  },
  {
    id: "illustrator-artboard-tool-all",
    tool: "Adobe Illustrator",
    category: "Tools",
    platform: "All",
    action: "Artboard tool",
    shortcut: "Shift + O",
    description: "Select the artboard tool to create or edit artboards."
  },
  {
    id: "illustrator-align-left-all",
    tool: "Adobe Illustrator",
    category: "Editing",
    platform: "All",
    action: "Align left",
    shortcut: "Ctrl + Shift + L",
    description: "Align selected objects to the leftmost edge."
  },
  {
    id: "illustrator-pathfinder-unite-all",
    tool: "Adobe Illustrator",
    category: "Editing",
    platform: "All",
    action: "Pathfinder unite",
    shortcut: "Ctrl + Shift + F9",
    description: "Combine selected shapes into a single shape."
  },
  {
    id: "illustrator-zoom-in-all",
    tool: "Adobe Illustrator",
    category: "Navigation",
    platform: "All",
    action: "Zoom in",
    shortcut: "Ctrl + +",
    description: "Increase the canvas zoom level."
  },
  {
    id: "illustrator-duplicate-all",
    tool: "Adobe Illustrator",
    category: "Editing",
    platform: "All",
    action: "Duplicate",
    shortcut: "Ctrl + D",
    description: "Create a copy of the selected object."
  },
  {
    id: "premiere-pro-ripple-delete-all",
    tool: "Adobe Premiere Pro",
    category: "Editing",
    platform: "All",
    action: "Ripple delete",
    shortcut: "Shift + Del",
    description: "Remove a clip and shift remaining clips to fill the gap."
  },
  {
    id: "premiere-pro-zoom-timeline-all",
    tool: "Adobe Premiere Pro",
    category: "Navigation",
    platform: "All",
    action: "Zoom timeline",
    shortcut: "=",
    description: "Zoom in on the timeline for precise editing."
  },
  {
    id: "premiere-pro-cut-clip-all",
    tool: "Adobe Premiere Pro",
    category: "Editing",
    platform: "All",
    action: "Cut clip",
    shortcut: "Ctrl + K",
    description: "Split the selected clip at the playhead."
  },
  {
    id: "premiere-pro-play-toggle-all",
    tool: "Adobe Premiere Pro",
    category: "Playback",
    platform: "All",
    action: "Play toggle",
    shortcut: "Space",
    description: "Start or pause playback of the timeline."
  },
  {
    id: "premiere-pro-razor-tool-all",
    tool: "Adobe Premiere Pro",
    category: "Tools",
    platform: "All",
    action: "Razor tool",
    shortcut: "C",
    description: "Select the razor tool to cut clips manually."
  },
  {
    id: "canva-group-elements-all",
    tool: "Canva",
    category: "Editing",
    platform: "All",
    action: "Group elements",
    shortcut: "Ctrl + G",
    description: "Group selected elements to move or edit them together."
  },
  {
    id: "canva-align-center-all",
    tool: "Canva",
    category: "Editing",
    platform: "All",
    action: "Align center",
    shortcut: "Ctrl + Shift + C",
    description: "Center-align selected elements on the canvas."
  },
  {
    id: "canva-undo-all",
    tool: "Canva",
    category: "Editing",
    platform: "All",
    action: "Undo",
    shortcut: "Ctrl + Z",
    description: "Revert the last action performed on the design."
  },
  {
    id: "canva-add-text-all",
    tool: "Canva",
    category: "Editing",
    platform: "All",
    action: "Add text",
    shortcut: "T",
    description: "Insert a new text box on the canvas."
  },
  {
    id: "canva-duplicate-element-all",
    tool: "Canva",
    category: "Editing",
    platform: "All",
    action: "Duplicate element",
    shortcut: "Ctrl + D",
    description: "Create a copy of the selected element."
  },
  {
    id: "sketch-insert-shape-all",
    tool: "Sketch",
    category: "Editing",
    platform: "All",
    action: "Insert shape",
    shortcut: "R",
    description: "Add a rectangle shape to the canvas."
  },
  {
    id: "sketch-toggle-guides-all",
    tool: "Sketch",
    category: "Interface",
    platform: "All",
    action: "Toggle guides",
    shortcut: "Ctrl + ;",
    description: "Show or hide alignment guides for precise design."
  },
  {
    id: "sketch-duplicate-all",
    tool: "Sketch",
    category: "Editing",
    platform: "All",
    action: "Duplicate",
    shortcut: "Cmd + D",
    description: "Copy the selected layer or artboard."
  },
  {
    id: "sketch-export-all",
    tool: "Sketch",
    category: "Export",
    platform: "All",
    action: "Export",
    shortcut: "Cmd + Shift + E",
    description: "Export selected layers or artboards as images."
  },
  {
    id: "affinity-export-persona-all",
    tool: "Affinity Suite",
    category: "Export",
    platform: "All",
    action: "Switch to export persona",
    shortcut: "Ctrl + Shift + E",
    description: "Enter the export persona for advanced export options."
  },
  {
    id: "affinity-toggle-guides-all",
    tool: "Affinity Suite",
    category: "Interface",
    platform: "All",
    action: "Toggle guides",
    shortcut: "Ctrl + ;",
    description: "Show or hide guides for aligning objects."
  },
  {
    id: "affinity-align-distribute-all",
    tool: "Affinity Suite",
    category: "Editing",
    platform: "All",
    action: "Align distribute",
    shortcut: "Ctrl + Shift + A",
    description: "Evenly distribute selected objects."
  },
  {
    id: "affinity-undo-all",
    tool: "Affinity Suite",
    category: "Editing",
    platform: "All",
    action: "Undo",
    shortcut: "Ctrl + Z",
    description: "Revert the last action in the design."
  },

  // Browsers & Internet Tools
  {
    id: "chrome-reopen-tab-win",
    tool: "Google Chrome",
    category: "Navigation",
    platform: "Windows",
    action: "Reopen closed tab",
    shortcut: "Ctrl + Shift + T",
    description: "Restore the most recently closed tab."
  },
  {
    id: "chrome-reopen-tab-mac",
    tool: "Google Chrome",
    category: "Navigation",
    platform: "macOS",
    action: "Reopen closed tab",
    shortcut: "Cmd + Shift + T",
    description: "Reopen the last tab you closed."
  },
  {
    id: "chrome-new-tab-all",
    tool: "Google Chrome",
    category: "Navigation",
    platform: "All",
    action: "New tab",
    shortcut: "Ctrl + T",
    description: "Open a new blank tab in the browser."
  },
  {
    id: "chrome-bookmark-page-all",
    tool: "Google Chrome",
    category: "Bookmarks",
    platform: "All",
    action: "Bookmark page",
    shortcut: "Ctrl + D",
    description: "Add the current page to your bookmarks."
  },
  {
    id: "chrome-open-downloads-all",
    tool: "Google Chrome",
    category: "File Management",
    platform: "All",
    action: "Open downloads",
    shortcut: "Ctrl + J",
    description: "View the list of downloaded files."
  },
  {
    id: "chrome-incognito-window-all",
    tool: "Google Chrome",
    category: "Navigation",
    platform: "All",
    action: "New incognito window",
    shortcut: "Ctrl + Shift + N",
    description: "Open a private browsing window."
  },
  {
    id: "firefox-new-private-all",
    tool: "Firefox",
    category: "Navigation",
    platform: "All",
    action: "New private window",
    shortcut: "Ctrl + Shift + P",
    description: "Open a private browsing window that doesn't save history."
  },
  {
    id: "firefox-clear-cache-all",
    tool: "Firefox",
    category: "Settings",
    platform: "All",
    action: "Clear cache",
    shortcut: "Ctrl + Shift + Del",
    description: "Open the dialog to clear browsing data, including cache."
  },
  {
    id: "firefox-open-library-all",
    tool: "Firefox",
    category: "Bookmarks",
    platform: "All",
    action: "Open library",
    shortcut: "Ctrl + Shift + O",
    description: "Access the library to manage bookmarks and history."
  },
  {
    id: "firefox-new-tab-all",
    tool: "Firefox",
    category: "Navigation",
    platform: "All",
    action: "New tab",
    shortcut: "Ctrl + T",
    description: "Open a new blank tab in the browser."
  },
  {
    id: "firefox-reopen-tab-all",
    tool: "Firefox",
    category: "Navigation",
    platform: "All",
    action: "Reopen closed tab",
    shortcut: "Ctrl + Shift + T",
    description: "Restore the most recently closed tab."
  },
  {
    id: "firefox-inspect-element-all",
    tool: "Firefox",
    category: "Debugging",
    platform: "All",
    action: "Inspect element",
    shortcut: "Ctrl + Shift + C",
    description: "Open the developer tools to inspect a webpage element."
  },
  {
    id: "safari-new-tab-all",
    tool: "Safari",
    category: "Navigation",
    platform: "All",
    action: "New tab",
    shortcut: "Cmd + T",
    description: "Open a new blank tab in the browser."
  },
  {
    id: "safari-show-history-all",
    tool: "Safari",
    category: "Navigation",
    platform: "All",
    action: "Show history",
    shortcut: "Cmd + Option + E",
    description: "Display the browsing history."
  },
  {
    id: "safari-private-browsing-all",
    tool: "Safari",
    category: "Navigation",
    platform: "All",
    action: "New private window",
    shortcut: "Cmd + Shift + N",
    description: "Open a private browsing window."
  },
  {
    id: "safari-reopen-tab-all",
    tool: "Safari",
    category: "Navigation",
    platform: "All",
    action: "Reopen closed tab",
    shortcut: "Cmd + Shift + T",
    description: ""
  }
];

// Get a random shortcut for the "Shortcut of the Day" feature
export const getRandomShortcut = (): Shortcut => {
  const randomIndex = Math.floor(Math.random() * shortcuts.length);
  return shortcuts[randomIndex];
};

// Get all unique tools from shortcuts
export const getUniqueTools = (): string[] => {
  return Array.from(new Set(shortcuts.map(shortcut => shortcut.tool)));
};

// Get all unique categories from shortcuts
export const getUniqueCategories = (): string[] => {
  return Array.from(new Set(shortcuts.map(shortcut => shortcut.category)));
};

// Filter shortcuts by platform
export const getShortcutsByPlatform = (platform: Shortcut['platform']): Shortcut[] => {
  return shortcuts.filter(shortcut => 
    shortcut.platform === platform || shortcut.platform === "All"
  );
};

// Filter shortcuts by tool
export const getShortcutsByTool = (tool: string): Shortcut[] => {
  return shortcuts.filter(shortcut => shortcut.tool === tool);
};

// Filter shortcuts by category
export const getShortcutsByCategory = (category: string): Shortcut[] => {
  return shortcuts.filter(shortcut => shortcut.category === category);
};

// Search shortcuts by query (fuzzy matching)
export const searchShortcuts = (query: string, platform: Shortcut['platform']): Shortcut[] => {
  const lowerCaseQuery = query.toLowerCase();
  return shortcuts.filter(shortcut => {
    // Only include shortcuts that match the current platform or are available on all platforms
    const platformMatch = shortcut.platform === platform || shortcut.platform === "All";
    
    if (!platformMatch) return false;
    
    // Search in action, description, tool, and category
    return (
      shortcut.action.toLowerCase().includes(lowerCaseQuery) ||
      (shortcut.description?.toLowerCase().includes(lowerCaseQuery) || false) ||
      shortcut.tool.toLowerCase().includes(lowerCaseQuery) ||
      shortcut.category.toLowerCase().includes(lowerCaseQuery)
    );
  });
};
