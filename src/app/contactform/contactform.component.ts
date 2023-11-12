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

  name:any;
  email:any;
  massage:any;


  ngOnInit(): void {

  }

  async sendMail() {
    let messageField = this.messageField.nativeElement;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;



    //show animation

if(emailField.value.endsWith('.de') || emailField.value.endsWith('.com') || emailField.value.endsWith('.net')){
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    //send
    this.disableFields(nameField, emailField,messageField,sendButton);

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
    this.enableFields(nameField, emailField,messageField,sendButton);
    this.setValue();
  }
  else{
    this.setValue();
  }

  }

  setValue(){
    let messageField = this.messageField.nativeElement;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }


disableFields(nameField:any, emailField:any,messageField:any,sendButton:any){
  messageField.disabled = true;
  nameField.disabled = true;
  emailField.disabled = true;
  sendButton.disabled = true;
}

enableFields(nameField:any, emailField:any,messageField:any,sendButton:any){
  messageField.disabled = false;
  nameField.disabled = false;
  emailField.disabled = false;
  sendButton.disabled = false;
}
}