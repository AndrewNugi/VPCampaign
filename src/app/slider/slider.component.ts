import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

type MediaType = 'image' | 'video';

export interface Slide {
  type: MediaType;
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {
  
  @Input() images: { type:MediaType; imgSrc: string; imgAlt: string }[] = [];

  @ViewChildren('video') videos!: QueryList<ElementRef<HTMLVideoElement>>;


  selectedIndex = 0;

  private pauseAllVideos(): void {
    this.videos.forEach(video => {
      const videoElement = video.nativeElement as HTMLVideoElement;
      if (videoElement && typeof videoElement.pause === 'function') {
        videoElement.pause();
      }
    });
  }
  ngAfterViewInit(): void {
    this.pauseAllVideos(); // Pause all videos initially if needed
  }
  
  showPrev(i:number) {
    this.pauseAllVideos();
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }
  }
  showNext(i:number) {
    this.pauseAllVideos();
    if (this.selectedIndex < this.images?.length -1) {
      this.selectedIndex = i + 1;
    }
  }
  
}
