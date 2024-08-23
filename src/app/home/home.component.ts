import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


type MediaType = 'image' | 'video';

export interface Slide {
  type: MediaType;
  imgSrc: string;
  imgAlt: string;
}

interface Achievement {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  achievements: Achievement[] = [
    { title: 'Achievement 1', description: 'This is the first achievement.' },
    { title: 'Achievement 2', description: 'This is the second achievement.' },
    { title: 'Achievement 3', description: 'This is the third achievement.' },
    // Add more achievements as needed
  ];


  images: Slide[] = [
    {
      type: 'image',
      imgSrc:
      'sharon4.jpg',
      imgAlt:
      'CampaignPhoto4',
    },
    {
      type: 'video',
      imgSrc: 
      'sharonvid3.mp4',
      imgAlt:
      'CampaignVid3',
    },
    {
      type: 'image',
      imgSrc: 
      'sharon3.jpg',
      imgAlt:
      'CampaignPhoto3',
    },
    {
      type: 'image',
      imgSrc: 
      'sharon2.jpg',
      imgAlt:
      'CampaignPhoto2',
    },
    {
      type: 'video',
      imgSrc: 
      'sharonvid1.mp4',
      imgAlt:
      'CampaignVid1',
    },
    {
      type: 'image',
      imgSrc: 
      'sharon5.JPG',
      imgAlt:
      'CampaignPhoto5',
    },
    {
      type: 'video',
      imgSrc: 
      'sharonvid2.MP4',
      imgAlt:
      'CampaignVid2',
    },
    {
      type: 'image',
      imgSrc: 
      'sharon6.JPG',
      imgAlt:
      'CampaignPhoto6',
    },
    {
      type: 'image',
      imgSrc: 
      'sharon7.jpg',
      imgAlt:
      'CampaignPhoto7',
    }
  ]
}

