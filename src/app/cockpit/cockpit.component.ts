import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverElements = [];
  @Output()serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bjdata')blueprintCreated = new EventEmitter<{blueprintName:string,blueprintcontent:string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(newInput:HTMLInputElement) {
    console.log("ssss",newInput.value);
   this.serverCreated.emit({
    // serverName:this.newServerName
    serverName:newInput.value,
  serverContent:this.newServerContent})
  }

  onAddBlueprint(newInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      // blueprintName:this.newServerName,
      blueprintName:newInput.value,
    blueprintcontent:this.newServerContent})
  }
}
