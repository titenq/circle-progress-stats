import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountUpModule } from 'ngx-countup';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CountUpModule,
    NgCircleProgressModule.forRoot({
      percent: 0,
      maxPercent: 1000,
      radius: 90,
      clockwise: true,
      responsive: false,
      startFromZero: true,
      showZeroOuterStroke: true,
      showTitle: true,
      showSubtitle: true,
      showUnits: true,
      showImage: false, // If true, all text will be hide
      showBackground: true,
      showInnerStroke: true,
      backgroundStroke: 'transparent',
      backgroundStrokeWidth: 0,
      backgroundPadding: 5,
      backgroundGradient: false,
      backgroundColor: 'transparent',
      backgroundGradientStopColor: 'transparent',
      backgroundOpacity: 1,
      space: 4, // Space between outer circle and inner circle
      toFixed: 0,
      renderOnClick: true,
      units: '%',
      unitsFontSize: '10',
      unitsFontWeight: '100',
      unitsColor: '#444444',
      outerStrokeWidth: 8,
      outerStrokeGradient: false,
      outerStrokeColor: '#78C000',
      outerStrokeGradientStopColor: 'transparent',
      outerStrokeLinecap: 'round', // butt | round | square | inherit
      innerStrokeWidth: 4,
      innerStrokeColor: '#C7E596',
      title: 'auto', // string | [string]
      titleFormat: undefined, // Function
      titleColor: '#444444',
      titleFontSize: '20',
      titleFontWeight: '100',
      subtitle: 'Percent', // string | [string]
      /* subtitleFormat: function formatSubtitle (percent: number) : string {
        if(percent >= 85){
          return "Congratulations!"
        }else if(percent >= 50){
          return "Half"
        }else if(percent > 0){
          return "Just began"
        }else {
          return "Not started"
        }
      }, */
      subtitleFormat: undefined, // Function
      subtitleColor: '#A9A9A9',
      subtitleFontSize: '10',
      subtitleFontWeight: '100',
      imageSrc: '/assets/images/music.svg',
      imageHeight: 80,
      imageWidth: 80,
      animation: true,
      animateTitle: true,
      animateSubtitle: false,
      animationDuration: 500,
      class: '', // CSS class name for SVG element
      lazy: false // Pauses when out of viewport
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
