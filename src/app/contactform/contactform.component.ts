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
  @ViewChild('nameRequired') nameRequired!: ElementRef;
  @ViewChild('emailRequired') emailRequired!: ElementRef;
  @ViewChild('messageRequired') messageRequired!: ElementRef;
  @ViewChild('checkBoxRequired') checkBoxRequired!: ElementRef;

  name: any;
  email: any;
  massage: any;

  firstClickName = true;
  firstClickEmail = true;
  firstClickMessages = true;
  firstClickAGB = true;

  ngOnInit(): void {

  }


  /**
   * 
   * @param id shows message if field is still empty after click
   */
  showErrorMsg(id: any) {
    let messageField = this.messageField.nativeElement;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let nameRequired = this.nameRequired.nativeElement;
    let emailRequired = this.emailRequired.nativeElement;
    let messageRequired = this.messageRequired.nativeElement;
    let checkBoxRequired = this.checkBoxRequired.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    this.idIsAGB(id, checkBoxRequired);
    this.idIsName(id, nameRequired, nameField);
    this.idIsEmail(id, emailRequired, emailField);
    this.idIsMessages(id, messageRequired, messageField);
    this.enableButton(messageField, emailField, nameField, sendButton);
  }


  /**
   * 
   * enables and disables button
   * @param messageField string
   * @param emailField string
   * @param nameField string
   * @param sendButton string
   */
  enableButton(messageField: any, emailField: any, nameField: any, sendButton: any) {
    if (messageField.value != '' && emailField.value != '' && nameField.value != '' && this.isChecked == false) {
      sendButton.disabled = false;
      sendButton.classList.add('greenButton');
    }
    else {
      sendButton.disabled = true;
      sendButton.classList.remove('greenButton');
    }
  }


  /**
   * checks if checkbox is activated
   */
  isChecked: any = false;
  doSomething(event: any) {
    if (event.target.checked == true) {
      console.log('checkbox is checked');
      this.isChecked = true;
    }
    else {
      console.log('checkbox is unchecked');
      this.isChecked = false;
    }
  }


  /**
   * checks if field is empty and shows div with error message
   * @param id of Value
   * @param checkBoxRequired id of selected field
   */
  idIsAGB(id: any, checkBoxRequired: any) {

    if (id === 'AGB' && this.firstClickAGB === true) {
      this.firstClickAGB = false;
    }

    else {
      if (this.isChecked == true && this.firstClickAGB === false) {
        checkBoxRequired.classList.remove('d-none');
      }
      else if (!checkBoxRequired.classList.contains('d-none')) {
        checkBoxRequired.classList.add('d-none');
      }
    }
  }


  /**
   * checks if field is empty and shows div with error message
   * @param id of Value
   * @param nameRequired id of selected field
   * @param nameField input field
   */
  idIsName(id: any, nameRequired: any, nameField: any) {
    if (id === 'names' && this.firstClickName === true) {
      this.firstClickName = false;
    }

    else {
      if (nameField.value === '' && this.firstClickName === false) {
        nameRequired.classList.remove('d-none');
      }
      else if (!nameRequired.classList.contains('d-none')) {
        nameRequired.classList.add('d-none');
      }
    }
  }


  /**
   * checks if field is empty and shows div with error message
   * @param id of Value
   * @param emailRequired id of selected field
   * @param emailField input field
   */
  idIsEmail(id: any, emailRequired: any, emailField: any) {
    if (id === 'emails' && this.firstClickEmail === true) {
      this.firstClickEmail = false;
    }
    else {
      if (emailField.value === '' && this.firstClickEmail === false) {
        emailRequired.classList.remove('d-none');
      }
      else if (!emailRequired.classList.contains('d-none')) {
        emailRequired.classList.add('d-none');
      }
    }
  }


  /**
   *
   * checks if field is empty and shows div with error message
   * @param id of Value
   * @param messageRequired id of selected field
   * @param messageField input field
   */
  idIsMessages(id: any, messageRequired: any, messageField: any) {
    if (id === 'messages' && this.firstClickMessages === true) {
      this.firstClickMessages = false;
    }
    else {
      if (messageField.value === '' && this.firstClickMessages === false) {
        messageRequired.classList.remove('d-none');
      }
      else if (!messageRequired.classList.contains('d-none')) {
        messageRequired.classList.add('d-none');
      }
    }
  }


  /**
   * sends message from contact form to email adress
   */
  async sendMail() {
    let messageField = this.messageField.nativeElement;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    //show animation
    if (emailField.value.endsWith('.de') || emailField.value.endsWith('.com') || emailField.value.endsWith('.net')) {
      let fd = new FormData();
      fd.append('name', nameField.value);
      fd.append('email', emailField.value);
      fd.append('message', messageField.value);

      //send
      this.disableFields(nameField, emailField, messageField, sendButton);

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
      this.enableFields(nameField, emailField, messageField, sendButton);
      this.setValue();
    }
    else {
      this.setValue();
    }
  }


  /**
   * clears input field after sending message
   */
  setValue() {
    let messageField = this.messageField.nativeElement;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }


  /**
   * disables input fields while sending message
   * @param nameField 
   * @param emailField 
   * @param messageField 
   * @param sendButton 
   */
  disableFields(nameField: any, emailField: any, messageField: any, sendButton: any) {
    messageField.disabled = true;
    nameField.disabled = true;
    emailField.disabled = true;
    sendButton.disabled = true;
    sendButton.classList.remove('greenButton');
  }


  /**
   * enables input fields after sending message
   * @param nameField 
   * @param emailField 
   * @param messageField 
   * @param sendButton 
   */
  enableFields(nameField: any, emailField: any, messageField: any, sendButton: any) {
    messageField.disabled = false;
    nameField.disabled = false;
    emailField.disabled = false;
    // sendButton.disabled = false;
  }
}