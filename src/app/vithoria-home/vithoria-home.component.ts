import { Component, OnInit } from '@angular/core';
import { VithoriaTasksServiceService } from '../vithoria-tasks-service.service';

@Component({
  selector: 'app-vithoria-home',
  templateUrl: './vithoria-home.component.html',
  styleUrls: ['./vithoria-home.component.css'],
})
export class VithoriaHomeComponent implements OnInit {
  count;
  constructor(private tasks: VithoriaTasksServiceService) {}

  ngOnInit() {
    this.count = this.tasks.getList().length;
  }
}
