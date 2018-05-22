import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SmsGateway } from '../service/smsgateway';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  api = new SmsGateway(this.http)
  history: Object;
  user: String;
  currentId: String;
  message: String;

  constructor(private http: HttpClient){
    this.currentId = this.makeid();
    this.user = this.currentId;
    const updateChatInterval = interval(1000);
    updateChatInterval.subscribe(n => {
      this.updateChat();
    });

  }


  sendKey(event)
  {
    if(event.keyCode == 13)
    {
      this.sendMessage();
    }
  }

  sendMessage()
  {
    if(this.message.trim().length != 0)
    {
      this.api.sendMessage(this.user, this.message).subscribe(data =>{
        this.api.retrieveMessage().subscribe(resval =>{
          this.history = resval["messages"];
          this.message = "";
        });
      });
    }
  }

  updateChat()
  {
    this.api.retrieveMessage().subscribe(resval =>{
      this.history = resval["messages"];
    });
  }

  userChange()
  {
    if(this.user.trim().length == 0)
    {
      this.user = this.currentId;
    }
    else
    {
      this.currentId = this.user;
    }
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
}

