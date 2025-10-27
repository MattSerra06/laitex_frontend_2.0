# LaTeX Editor - Frontend 2.0

A modern, feature-rich LaTeX editor built with Angular 20 and Angular Material, inspired by Overleaf.

## Features

### 📝 Editor Layout
- **Three-panel layout**: File tree, LaTeX editor, and PDF preview
- **Collapsible file tree**: Overleaf-style project structure navigation
- **Monaco Editor integration**: Professional code editing experience with syntax highlighting
- **PDF Preview**: Live preview panel for compiled documents

### 🎨 Theming
- **Light & Dark themes**: Seamless theme switching
- **Material Design 3**: Modern, clean UI with pastel color palette
- **Minimalist style**: Focused, distraction-free editing environment

### 💬 AI Assistant
- **Floating chat bubble**: Accessible from anywhere in the editor
- **Draggable window**: Position the chat wherever you need it
- **Fullscreen mode**: Expand chat for detailed conversations
- **Minimize/Maximize**: Control your workspace layout

### 🛠️ Technical Stack
- **Angular 20**: Latest Angular framework
- **Angular Material**: Material Design components
- **Monaco Editor**: VS Code's editor for web
- **SCSS**: Advanced styling capabilities
- **TypeScript**: Type-safe development

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MattSerra06/laitex_frontend_2.0.git
cd laitex_frontend_2.0
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
# or
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── editor-layout/      # Main layout container
│   │   ├── file-tree/          # Project file navigation
│   │   ├── latex-editor/       # Monaco-based LaTeX editor
│   │   ├── pdf-preview/        # PDF preview panel
│   │   └── chat-bubble/        # AI assistant chat
│   ├── services/
│   │   ├── latex-document.ts   # Document state management
│   │   └── theme.ts            # Theme switching logic
│   └── app-module.ts
├── styles.scss                 # Global styles and theming
└── index.html
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode

## Key Features Documentation

### File Tree
- Browse project files with an intuitive tree structure
- Click files to open them in the editor
- Icons differentiate file types (.tex, .bib, .pdf)
- Collapsible sidebar for more editor space

### LaTeX Editor
- Full-featured Monaco Editor integration
- Syntax highlighting for LaTeX
- Line numbers and minimap
- Auto-save functionality
- Responsive to theme changes

### PDF Preview
- Real-time preview of compiled documents
- Placeholder for backend integration
- Compile button for manual updates
- Responsive layout

### Chat Assistant
- Floating bubble in bottom-right corner
- Click to open/close chat window
- Drag to reposition anywhere on screen
- Fullscreen mode for extended conversations
- Message history with timestamps

### Theme Switching
- Toggle between light and dark themes
- Persistent preference (saved in localStorage)
- Smooth transitions
- Consistent across all components

## Architecture

The application follows Angular best practices:

- **Component-based architecture**: Modular, reusable components
- **Service layer**: Centralized state management
- **Reactive programming**: RxJS observables for data flow
- **Material Design**: Consistent UI/UX patterns
- **SCSS organization**: Scoped styles with global theming

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements

- Backend integration for LaTeX compilation
- Real-time collaboration features
- Advanced AI assistance for LaTeX syntax
- Git integration
- Template library
- Export options (PDF, ZIP)

## Contributing

This project is part of the LaTeX Editor 2.0 initiative. For contributions, please follow the Angular style guide and Material Design principles.

## License

[Add your license here]

## Acknowledgments

- Angular team for the amazing framework
- Material Design for the design system
- Monaco Editor for the code editing experience
- Overleaf for the inspiration
