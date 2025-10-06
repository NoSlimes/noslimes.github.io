// Theme Toggle Functionality
class ThemeToggle {
    constructor() {
        this.currentTheme = this.getSavedTheme() || this.getSystemTheme();
        this.init();
    }

    init() {
        // Apply the current theme immediately
        this.applyTheme(this.currentTheme);
        
        // Set up the toggle button event listener
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
        }
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    getSavedTheme() {
        return localStorage.getItem('theme');
    }

    saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        this.saveTheme(theme);
        this.updateToggleIcon();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        
        // Add a fun rotation effect
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                toggleButton.style.transform = '';
            }, 300);
        }
    }

    updateToggleIcon() {
        // No icon needed - color changes are handled by CSS
    }
}

// Make ThemeToggle available globally
window.ThemeToggle = ThemeToggle;

// Apply theme immediately on script load (before navigation loads)
document.documentElement.setAttribute('data-theme', 
  localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
);
