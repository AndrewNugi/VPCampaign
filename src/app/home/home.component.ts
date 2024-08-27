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
    { title: '2022 - 2023', description: 'KMUN Communications Director; National Secretariat' },
    { title: '2022 - 2023', description: '14th Student Council Chairperson of the Board, PR Senate' },
    { title: '2022', description: 'SUMG Assistant Director of Communications' },
    { title: '2021', description: 'SUMG Social Media Manager' },
    { title: '2020 - 2021', description: '13th Student Council Director of Partnerships, VP Senate' },
    { title: '2020 - 2021', description: '12th Student Council Social Media Manager, PR Senate' },
    { title: '2020 - 2021', description: 'SU Chorale President' },
    { title: '2020', description: 'SU Chorale Vice President' }
  ];


  images: Slide[] = [
    {
      type: 'video',
      imgSrc: 
      'sharonvid4.mp4',
      imgAlt:
      'CampaignVid4',
    },
    {
      type: 'image',
      imgSrc:
      'sharon4.jpg',
      imgAlt:
      'CampaignPhoto4',
    },
    {
      type: 'image',
      imgSrc: 
      'sharon8.jpg',
      imgAlt:
      'CampaignPhoto8',
    },
    {
      type: 'image',
      imgSrc: 
      'sharon9.jpg',
      imgAlt:
      'CampaignPhoto9',
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

