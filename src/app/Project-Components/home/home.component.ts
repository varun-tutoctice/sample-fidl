import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  video;
  btn;
  playPause;

  constructor() {}

  ngOnInit(): void {
    this.video = document.getElementById('myVideo');
    this.btn = document.getElementById('myBtn');
    this.playPause = document.getElementById('icon-play');
    var video = document.querySelector('video');
    video.addEventListener('ended', function () {
      video.load();
    });
    // this.video.muted = "muted"
  }

  myFunction() {
    console.log(this.btn);
    if (this.video.paused) {
      this.video.play();
      // this.btn.innerHTML = "Pause";
      this.btn.classList.remove('fa-play-circle');
      this.btn.classList.add('fa-pause-circle');
    } else {
      this.video.pause();
      this.btn.classList.add('fa-play-circle');
      this.btn.classList.remove('fa-pause-circle');
      // this.btn.innerHTML = "Play";
    }
  }
}
