
import { Component, Input } from '@angular/core';

interface Achievement {
  title: string;
  description: string;
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {

  @Input() achievements: { title: string; description: string }[] = [];
  

  currentIndex = 0;

  showNext() {
    if (this.currentIndex < this.achievements.length - 1) {
      this.currentIndex++;
    }
  }

  showPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  onSwipeLeft() {
    this.showNext();
  }

  onSwipeRight() {
    this.showPrev();
  }
}
