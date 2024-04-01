import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  articles = [
    {
      img:'../../../assets/images/1.jpg',
      title: 'Mackbook pro',
      desc: 'XDR brightness: 1000 nits sustained full-screen, 1600 nits peak2 (HDR content only) SDR brightness: 600 nits'
    },
    {
      img:'../../../assets/images/2.jpg',
      title: 'Mackbook ',
      desc: 'On your Mac, see details about your Mac hardware, network connections, and software, and create a system report.'
    },
    {
      img:'../../../assets/images/3.jpg',
      title: 'Asus DUO ',
      desc: 'Zenbook. Premium, thin, and light · Vivobook. Perform in style · Chromebook. Simple, secure, cloud-based · ASUS Zenbook DUO (2024) UX8406 · ASUS Vivobook Pro 15'
    },
    {
      img:'../../../assets/images/4.jpg',
      title: 'HP Elite book ',
      desc: 'The HP HotKey Support (HPHKS) software provides the support for handling the Hotkeys (fixed notebook buttons that provide quick access to a particular function when pressed) for HP\'s business notebooks.'
    },
    {
      img:'../../../assets/images/5.jpg',
      title: 'Dual monitor ',
      desc: 'The HotKey Support (HPHKS) software provides the support for handling the Hotkeys (fixed notebook buttons that provide quick access to a particular function when pressed) for HP\'s business notebooks.'
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
