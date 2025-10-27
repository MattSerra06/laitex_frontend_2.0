import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Interface for file tree node
 */
export interface FileNode {
  name: string;
  type: 'file' | 'folder';
  path: string;
  children?: FileNode[];
  content?: string;
}

/**
 * Service to manage LaTeX document state
 */
@Injectable({
  providedIn: 'root'
})
export class LatexDocument {
  private latexContentSubject: BehaviorSubject<string>;
  private selectedFileSubject: BehaviorSubject<FileNode | null>;
  private fileTreeSubject: BehaviorSubject<FileNode[]>;
  
  public latexContent$: Observable<string>;
  public selectedFile$: Observable<FileNode | null>;
  public fileTree$: Observable<FileNode[]>;

  constructor() {
    // Initialize with default LaTeX content
    const defaultContent = `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{amsmath}

\\title{My LaTeX Document}
\\author{Author Name}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Introduction}
This is a sample LaTeX document. You can edit this content in the editor.

\\section{Mathematical Expressions}
Here's an equation:
\\begin{equation}
    E = mc^2
\\end{equation}

\\end{document}`;

    // Initialize default file tree
    const defaultFileTree: FileNode[] = [
      {
        name: 'main.tex',
        type: 'file',
        path: 'main.tex',
        content: defaultContent
      },
      {
        name: 'references.bib',
        type: 'file',
        path: 'references.bib',
        content: ''
      }
    ];

    this.latexContentSubject = new BehaviorSubject<string>(defaultContent);
    this.selectedFileSubject = new BehaviorSubject<FileNode | null>(defaultFileTree[0]);
    this.fileTreeSubject = new BehaviorSubject<FileNode[]>(defaultFileTree);
    
    this.latexContent$ = this.latexContentSubject.asObservable();
    this.selectedFile$ = this.selectedFileSubject.asObservable();
    this.fileTree$ = this.fileTreeSubject.asObservable();
  }

  /**
   * Update LaTeX content
   */
  updateContent(content: string): void {
    this.latexContentSubject.next(content);
    
    // Update content in the file tree
    const selectedFile = this.selectedFileSubject.value;
    if (selectedFile) {
      selectedFile.content = content;
    }
  }

  /**
   * Select a file from the tree
   */
  selectFile(file: FileNode): void {
    if (file.type === 'file') {
      this.selectedFileSubject.next(file);
      this.latexContentSubject.next(file.content || '');
    }
  }

  /**
   * Add a new file to the tree
   */
  addFile(name: string, type: 'file' | 'folder', parentPath?: string): void {
    const fileTree = this.fileTreeSubject.value;
    const newNode: FileNode = {
      name,
      type,
      path: parentPath ? `${parentPath}/${name}` : name,
      content: type === 'file' ? '' : undefined,
      children: type === 'folder' ? [] : undefined
    };
    
    fileTree.push(newNode);
    this.fileTreeSubject.next([...fileTree]);
  }

  /**
   * Get current content
   */
  get currentContent(): string {
    return this.latexContentSubject.value;
  }

  /**
   * Get current file tree
   */
  get currentFileTree(): FileNode[] {
    return this.fileTreeSubject.value;
  }
}
