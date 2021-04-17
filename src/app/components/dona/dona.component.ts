import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  @Input() title: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: Label[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];
  @Input('data') doughnutChartData: MultiDataSet = [[350, 450, 100]];

  public colors: Color[] = [
    { backgroundColor: ['#2f3d4a', '#009efb', '#55ce63'] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
