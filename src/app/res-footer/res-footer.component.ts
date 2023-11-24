import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-res-footer',
  templateUrl: './res-footer.component.html',
  styleUrls: ['./res-footer.component.scss']
})
export class ResFooterComponent implements OnInit{
  @ViewChild('imprintApp') imprintApp!: ElementRef;
  constructor(){}


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
  openLink(link: string){
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

  ngOnInit(): void {
    
  }
}
