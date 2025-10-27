import { Component, OnInit } from '@angular/core';
import { LatexDocument, FileNode } from '../../services/latex-document';

/**
 * File tree component for displaying project structure
 */
@Component({
  selector: 'app-file-tree',
  standalone: false,
  templateUrl: './file-tree.html',
  styleUrl: './file-tree.scss',
})
export class FileTree implements OnInit {
  fileTree: FileNode[] = [];
  selectedFile: FileNode | null = null;

  constructor(private latexDocService: LatexDocument) {}

  ngOnInit(): void {
    // Subscribe to file tree updates
    this.latexDocService.fileTree$.subscribe(tree => {
      this.fileTree = tree;
    });

    // Subscribe to selected file updates
    this.latexDocService.selectedFile$.subscribe(file => {
      this.selectedFile = file;
    });
  }

  /**
   * Handle file selection
   */
  onFileSelect(file: FileNode): void {
    if (file.type === 'file') {
      this.latexDocService.selectFile(file);
    }
  }

  /**
   * Get icon for file/folder
   */
  getIcon(node: FileNode): string {
    if (node.type === 'folder') {
      return 'folder';
    }
    
    // Return icon based on file extension
    if (node.name.endsWith('.tex')) {
      return 'description';
    } else if (node.name.endsWith('.bib')) {
      return 'library_books';
    } else if (node.name.endsWith('.pdf')) {
      return 'picture_as_pdf';
    }
    
    return 'insert_drive_file';
  }

  /**
   * Check if file is selected
   */
  isSelected(file: FileNode): boolean {
    return this.selectedFile?.path === file.path;
  }
}
