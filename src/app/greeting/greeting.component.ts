import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {


  /**
   * open external link in new tab
   * @param link external link
   */
  openLink(link: string){
    window.open(link, "_blank");
  }
}
