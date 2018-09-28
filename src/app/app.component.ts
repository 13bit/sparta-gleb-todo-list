import {Component, OnInit} from "@angular/core";
import {Task, TASKS} from "./tasks";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tasks: Task[];
  task: Task;

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
    this.task = {
      id: this.getNextTaskId(),
      task: ''
    };
  }

  saveTask(task: Task) {
    const taskIsExist = this.tasks.find((taskFromTasks) => taskFromTasks.id === task.id);

    if (!taskIsExist) {
      this.tasks.push(task);
    }

    this.showForm = false;
  }

  editTask(task) {
    this.showForm = true;

    this.task = task;
  }

  getNextTaskId(): number {
    return this.tasks[this.tasks.length - 1].id + 1;
  }

}
