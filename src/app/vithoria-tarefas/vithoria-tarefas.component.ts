import { Component, OnInit } from '@angular/core';
import { VithoriaTasksServiceService } from '../vithoria-tasks-service.service';

@Component({
  selector: 'app-vithoria-tarefas',
  templateUrl: './vithoria-tarefas.component.html',
  styleUrls: ['./vithoria-tarefas.component.css'],
})
export class VithoriaTarefasComponent implements OnInit {
  lista = null;
  tarefa = 'Nome da tarefa';
  constructor(private tasks: VithoriaTasksServiceService) {}

  deletarItem(i: number) {
    this.tasks.deleteItem(i);
  }

  criarItem() {
    this.tasks.createItem(this.tarefa);
  }

  ngOnInit() {
    this.lista = this.tasks.getList();
  }
}
