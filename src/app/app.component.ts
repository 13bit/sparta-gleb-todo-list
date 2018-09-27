import {Component, OnInit} from "@angular/core";
import {TASKS} from "./tasks";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tasks;
  task;

  showForm: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.tasks = TASKS;
  }

  addTask() {
    this.showForm = true;
  }

  saveTask() {
    if (this.task) {
      this.tasks.push(this.task);
      this.showForm = false;
    }

    this.task = '';
  }

}
