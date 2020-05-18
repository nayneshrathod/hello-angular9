import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {

  constructor() { }
  mystr ='alert alert-info'

  ngOnInit(): void {
  }
  mySwt() {
    console.log("sdsdds")
  }
}
