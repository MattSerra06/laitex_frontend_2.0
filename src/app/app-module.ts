import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { EditorLayout } from './components/editor-layout/editor-layout';
import { FileTree } from './components/file-tree/file-tree';
import { LatexEditor } from './components/latex-editor/latex-editor';
import { PdfPreview } from './components/pdf-preview/pdf-preview';
import { ChatBubble } from './components/chat-bubble/chat-bubble';

@NgModule({
  declarations: [
    App,
    EditorLayout,
    FileTree,
    LatexEditor,
    PdfPreview,
    ChatBubble
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    DragDropModule,
    TextFieldModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync()
  ],
  bootstrap: [App]
})
export class AppModule { }
