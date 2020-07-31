import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  componentTitle: string = "This is the feature component.";
  // visit feature.component.spec.ts file for the unit testing logic
  constructor() { }

  ngOnInit(): void {
  }

}
