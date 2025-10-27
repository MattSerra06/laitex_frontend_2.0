import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Chat bubble component with draggable and fullscreen capabilities
 */
@Component({
  selector: 'app-chat-bubble',
  standalone: false,
  templateUrl: './chat-bubble.html',
  styleUrl: './chat-bubble.scss',
})
export class ChatBubble {
  @Input() isOpen = false;
  @Output() toggleChat = new EventEmitter<void>();

  isFullscreen = false;
  isMinimized = false;
  messages: Array<{ text: string; isUser: boolean; timestamp: Date }> = [
    {
      text: 'Hello! I\'m your LaTeX assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ];
  currentMessage = '';

  /**
   * Toggle chat window
   */
  onToggleChat(): void {
    this.toggleChat.emit();
  }

  /**
   * Toggle fullscreen mode
   */
  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
    this.isMinimized = false;
  }

  /**
   * Minimize chat window
   */
  minimize(): void {
    this.isMinimized = !this.isMinimized;
    this.isFullscreen = false;
  }

  /**
   * Close chat window
   */
  close(): void {
    this.isOpen = false;
    this.isFullscreen = false;
    this.isMinimized = false;
    this.onToggleChat();
  }

  /**
   * Send message
   */
  sendMessage(): void {
    if (this.currentMessage.trim()) {
      // Add user message
      this.messages.push({
        text: this.currentMessage,
        isUser: true,
        timestamp: new Date()
      });

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({
          text: 'I received your message. In a full implementation, I would help you with LaTeX-related questions and suggestions.',
          isUser: false,
          timestamp: new Date()
        });
      }, 1000);

      this.currentMessage = '';
    }
  }

  /**
   * Handle Enter key in message input
   */
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
