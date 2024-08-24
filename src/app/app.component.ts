import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VPCampaign';

  showAlert = false; // Default to false

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Subscribe to router events to detect navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current URL is exactly /home
        const isHomeRoute = this.router.url === '/home';
        
        // Check if the alert has already been shown
        const alertShown = localStorage.getItem('alertShown');

        if (isHomeRoute && !alertShown) {
          this.showAlert = true; // Show the alert
          localStorage.setItem('alertShown', 'true'); // Set the flag to true
        } else {
          this.showAlert = false; // Hide the alert for other routes or after showing
        }
      }
    });
  }

  closeAlert(): void {
    this.showAlert = false; // Close the alert
  }
}
