import { Component, OnInit } from '@angular/core';
import { LatexDocument } from '../../services/latex-document';

/**
 * PDF preview component
 * Displays the rendered LaTeX document
 */
@Component({
  selector: 'app-pdf-preview',
  standalone: false,
  templateUrl: './pdf-preview.html',
  styleUrl: './pdf-preview.scss',
})
export class PdfPreview implements OnInit {
  isCompiling = false;
  hasError = false;
  errorMessage = '';

  constructor(private latexDocService: LatexDocument) {}

  ngOnInit(): void {
    // In a real implementation, this would connect to a LaTeX compilation service
    // For now, we'll show a placeholder
  }

  /**
   * Compile LaTeX document
   */
  compile(): void {
    this.isCompiling = true;
    this.hasError = false;

    // Simulate compilation (in real app, this would call a backend service)
    setTimeout(() => {
      this.isCompiling = false;
      // For demo purposes, we'll show a message
    }, 2000);
  }
}
