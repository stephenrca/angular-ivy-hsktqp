import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() libelle:string;  

  @Output() onSelect: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  clickItem() {
    this.onSelect.emit(this.libelle);
  }
}