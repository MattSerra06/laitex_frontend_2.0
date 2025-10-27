import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LatexDocument } from '../../services/latex-document';
import { Theme } from '../../services/theme';
import { Subject, takeUntil } from 'rxjs';

// Monaco Editor types
declare const monaco: any;

/**
 * LaTeX editor component using Monaco Editor
 */
@Component({
  selector: 'app-latex-editor',
  standalone: false,
  templateUrl: './latex-editor.html',
  styleUrl: './latex-editor.scss',
})
export class LatexEditor implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('editorContainer', { static: false }) editorContainer!: ElementRef;
  
  private editor: any;
  private destroy$ = new Subject<void>();

  constructor(
    private latexDocService: LatexDocument,
    private themeService: Theme
  ) {}

  ngOnInit(): void {
    // Load Monaco Editor script
    this.loadMonacoEditor();
  }

  ngAfterViewInit(): void {
    // Editor will be initialized after Monaco loads
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    
    if (this.editor) {
      this.editor.dispose();
    }
  }

  /**
   * Load Monaco Editor library
   */
  private loadMonacoEditor(): void {
    // Check if Monaco is already loaded
    if (typeof monaco !== 'undefined') {
      this.initializeEditor();
      return;
    }

    // Load Monaco from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js';
    script.onload = () => {
      (window as any).require.config({ 
        paths: { 
          vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' 
        } 
      });
      (window as any).require(['vs/editor/editor.main'], () => {
        this.initializeEditor();
      });
    };
    document.head.appendChild(script);
  }

  /**
   * Initialize Monaco Editor instance
   */
  private initializeEditor(): void {
    if (!this.editorContainer) {
      setTimeout(() => this.initializeEditor(), 100);
      return;
    }

    const isDark = this.themeService.isDarkMode;
    
    this.editor = monaco.editor.create(this.editorContainer.nativeElement, {
      value: this.latexDocService.currentContent,
      language: 'latex',
      theme: isDark ? 'vs-dark' : 'vs-light',
      automaticLayout: true,
      fontSize: 14,
      lineNumbers: 'on',
      minimap: { enabled: true },
      wordWrap: 'on',
      scrollBeyondLastLine: false,
      renderWhitespace: 'selection',
      tabSize: 2,
    });

    // Listen to content changes
    this.editor.onDidChangeModelContent(() => {
      const content = this.editor.getValue();
      this.latexDocService.updateContent(content);
    });

    // Subscribe to external content changes
    this.latexDocService.latexContent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(content => {
        if (this.editor && this.editor.getValue() !== content) {
          this.editor.setValue(content);
        }
      });

    // Subscribe to theme changes
    this.themeService.isDarkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isDark => {
        if (this.editor) {
          monaco.editor.setTheme(isDark ? 'vs-dark' : 'vs-light');
        }
      });
  }
}
