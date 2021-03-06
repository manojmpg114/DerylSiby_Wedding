import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SplashAnimationType } from './splash-animation-type';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit {

  windowWidth?: string;
  showSplash: boolean = true;
  opacityChange = 1;
  splashTransition?: string;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 3;
  @Input() animationType: SplashAnimationType = SplashAnimationType.SlideLeft;

  constructor() { }

  ngOnInit(): void {

    /*
    
    setTimeout( () => {

      let transitionStyle = '';

      switch(this.animationType){
        case SplashAnimationType.SlideLeft:
          this.windowWidth = '-' + window.innerWidth + 'px';
          transitionStyle = 'left' + this.animationDuration + 's';
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + 'px';
          transitionStyle = 'left' + this.animationDuration + 's';
          break;
        case SplashAnimationType.FadeOut:
          
          transitionStyle = 'opacity' + this.animationDuration + 's';
          this.opacityChange = 0;
          break;
        default:
          this.windowWidth = '-' + window.innerWidth + 'px';
          transitionStyle = 'left' + this.animationDuration + 's';
          break;
      }

      this.splashTransition = transitionStyle;

      setTimeout(() => {

        
        
      }, this.animationDuration * 1000);

      this.showSplash = !this.showSplash;

    }, this.duration * 1000);
    */

    /*this.windowWidth = '-' + window.innerWidth + 'px';*/
    
    setTimeout(() => {
      this.windowWidth = '-' + window.innerWidth + 'px';
      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500)
    }, 3000)

  }

}
