import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tasks } from '../tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks = [];
  newTask;
  latestId = 4;

  constructor() {}

  ngOnInit() {
    this.tasks = tasks;
  }

  doneTask(arr: any[]) {
    return  arr.filter(item => item.status === 1);
  }

  todoTask(arr: any[]) {
    return  arr.filter(item => item.status === 0);
  }

  add() {
    if (this.newTask) {
      this.tasks.push({
        _id: this.latestId++,
        text: this.newTask,
        status: 0
      });
      this.newTask = '';
    }
  }

  destroy(id: number) {
    this.tasks = this.tasks.filter(item => item._id !== id);
  }

  done(id: number) {
    this.tasks.map(item => {
      if (item._id === id) { item.status = 1; }
    });
  }

  undo(id: number) {
    this.tasks.map(item => {
      if (item._id === id) { item.status = 0; }
    });
  }

}
