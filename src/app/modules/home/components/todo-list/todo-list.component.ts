import { Component, DoCheck } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  ngDoCheck(): void {
    this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
  }

  public taskList: Array<TaskList> = [];

  public setEmitTaskList(event: string) {
    this.taskList.push( { task: event, checked: false });
  }

  public deleteItemTaskList(tarefa: number) {
    this.taskList.splice(tarefa, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Deseja realmente deletar todos os itens?");

    if(confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if(!event.length){
      const confirm = window.confirm("Deseja excluir a tarefa?");

      if(confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

}
