import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Service to manage application theme (light/dark mode)
 */
@Injectable({
  providedIn: 'root'
})
export class Theme {
  private readonly THEME_KEY = 'theme-preference';
  private isDarkModeSubject: BehaviorSubject<boolean>;
  public isDarkMode$: Observable<boolean>;

  constructor() {
    // Load saved theme preference or default to light mode
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    const isDark = savedTheme === 'dark';
    
    this.isDarkModeSubject = new BehaviorSubject<boolean>(isDark);
    this.isDarkMode$ = this.isDarkModeSubject.asObservable();
    
    // Apply theme on initialization
    this.applyTheme(isDark);
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const newTheme = !this.isDarkModeSubject.value;
    this.setTheme(newTheme);
  }

  /**
   * Set specific theme
   * @param isDark - true for dark mode, false for light mode
   */
  setTheme(isDark: boolean): void {
    this.isDarkModeSubject.next(isDark);
    this.applyTheme(isDark);
    localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
  }

  /**
   * Apply theme to document body
   */
  private applyTheme(isDark: boolean): void {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.body.style.colorScheme = isDark ? 'dark' : 'light';
  }

  /**
   * Get current theme state
   */
  get isDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }
}
