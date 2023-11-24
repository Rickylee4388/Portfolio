import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-res-header',
  templateUrl: './res-header.component.html',
  styleUrls: ['./res-header.component.scss']
})
export class ResHeaderComponent implements OnInit {
  @ViewChild('menuOverlay') menuOverlay!: ElementRef;

  constructor() { }


  /**
   * opens menu overlay
   */
  menuSlide() {
    let menuOverlay = this.menuOverlay.nativeElement;
    menuOverlay.classList.remove('d-none');
  }


  /**
   * hides menu overlay
   */
  menuSlideOff() {
    let menuOverlay = this.menuOverlay.nativeElement;
    menuOverlay.classList.add('d-none');
  }

  ngOnInit(): void {

  }
}
