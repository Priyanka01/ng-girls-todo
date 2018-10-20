import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})

​
@Injectable()
export class TodoListService {

  private todoList: TodoItem[] = [  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

  constructor() { }

  getTodoList() {
    return this.todoList;
  }
}
