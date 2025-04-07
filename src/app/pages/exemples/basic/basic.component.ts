import { Component, OnInit } from '@angular/core';
import { Postman } from '../../../core/models/postman.model';
import * as simple from '../../../../assets/collections/simple.json';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const postman = new Postman();
    console.log(simple);
    console.log(postman.item);
  }

}
