import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {
  [x: string]: any;
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;


  ngOnInit(): void {

  }

  // async sendMail(event:any) {
  //     event.preventDefault();
  //     const data = new FormData(event.target);
  //   console.log('Sending mail', this.myForm);
  //   let messageField = this.messageField.nativeElement;
  //   let nameField = this.nameField.nativeElement;
  //   let emailField = this.emailField.nativeElement;
  //   let sendButton = this.sendButton.nativeElement;


  //   messageField.disabled = true;
  //   nameField.disabled = true;
  //   emailField.disabled = true;
  //   sendButton.disabled = true;
  //   //show animation
  //   // let fd = new FormData();
  //   // fd.append('name', nameField.value);
  //   // // fd.append('email', emailField.value);
  //   // fd.append('message', messageField.value);
  //   //send
  //   await fetch('https://formspree.io/f/mvojyyrp',{
  //     method: 'POST',
  //          body: new FormData(event.target),
  //         headers: {
  //             'Accept': 'application/json'
  //         }
  //     }).then(() => {
  //         window.location.href = "./send_mail.html";
  //     }).catch((error) => {
  //         console.log(error);
  //     });

  async sendMail() {
    let messageField = this.messageField.nativeElement;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;


    messageField.disabled = true;
    nameField.disabled = true;
    emailField.disabled = true;
    sendButton.disabled = true;
    //show animation


    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    //send

    await fetch("https://formspree.io/f/myyqvaaz", {
      method: "POST",
      body: fd,
      headers: {
        'Accept': 'application/json'
      }
    }).catch((error) => {
      console.log(error);
    });

      // Show message send field
      messageField.disabled = false;
      nameField.disabled = false;
      emailField.disabled = false;
      sendButton.disabled = false;

  }


  //Show message send field
  //     messageField.disabled = false;
  //     nameField.disabled = false;
  //     emailField.disabled = false;
  //     sendButton.disabled = false;

  //   }
}
