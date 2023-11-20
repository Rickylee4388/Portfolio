import { Component } from '@angular/core';

@Component({
  selector: 'app-res-footer',
  templateUrl: './res-footer.component.html',
  styleUrls: ['./res-footer.component.scss']
})
export class ResFooterComponent {
  constructor(){}

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
