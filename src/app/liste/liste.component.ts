import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() tableauPays: Array<string>;
  selectedItem:string;
  constructor() { }

  ngOnInit() {
  }

  getSelectedItem($event) {
    this.selectedItem = $event;
  }

}