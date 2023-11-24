import { Component } from '@angular/core';

@Component({
  selector: 'app-res-contact',
  templateUrl: './res-contact.component.html',
  styleUrls: ['./res-contact.component.scss']
})
export class ResContactComponent {
  constructor() { }
  

  /**
   * scrolls to top of the page
   */
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
