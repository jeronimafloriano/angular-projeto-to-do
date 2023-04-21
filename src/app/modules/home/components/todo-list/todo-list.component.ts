import { Component } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = [];

  public deleteItemTaskList(tarefa: number) {
    this.taskList.splice(tarefa, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Deseja realmente deletar todos os itens?");

    if(confirm) {
      this.taskList = [];
    }
  }

}
