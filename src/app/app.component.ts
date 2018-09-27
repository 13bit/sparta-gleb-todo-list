import {Component, OnInit} from "@angular/core";
import {TASKS} from "./tasks";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tasks;

  constructor() {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.tasks = TASKS;
  }

  addTask(task) {
    this.tasks.push(task);
  }

}
