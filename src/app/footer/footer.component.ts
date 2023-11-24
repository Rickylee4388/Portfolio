import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  @ViewChild('imprintApp') imprintApp!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }


  /**
   * scrolls to top of page
   */
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  

  /**
   * open external link in new tab
   * @param link external link
   */
  openLink(link: string) {
    window.open(link, "_blank");
  }


  /**
   * shows imprint
   */
  openImprint() {
    let imprintApp = this.imprintApp.nativeElement;
    imprintApp.classList.remove('d-none');
  }


  /**
   * hides imprint
   */
  closeImprint() {
    let imprintApp = this.imprintApp.nativeElement;
    imprintApp.classList.add('d-none');
  }
}
