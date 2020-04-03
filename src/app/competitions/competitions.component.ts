import {Component, OnInit} from '@angular/core';
import {Competition} from './competition';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competition: Competition = {
    name: 'Wettkampf1',
    date: '01.01.2020'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
