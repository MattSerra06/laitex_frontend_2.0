import { Component } from '@angular/core';
import { Theme } from '../../services/theme';

/**
 * Main editor layout component
 * Contains the file tree, LaTeX editor, PDF preview, and chat bubble
 */
@Component({
  selector: 'app-editor-layout',
  standalone: false,
  templateUrl: './editor-layout.html',
  styleUrl: './editor-layout.scss',
})
export class EditorLayout {
  isFileTreeOpen = true;
  isChatOpen = false;

  constructor(public themeService: Theme) {}

  /**
   * Toggle file tree sidebar
   */
  toggleFileTree(): void {
    this.isFileTreeOpen = !this.isFileTreeOpen;
  }

  /**
   * Toggle chat window
   */
  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  /**
   * Toggle theme
   */
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
