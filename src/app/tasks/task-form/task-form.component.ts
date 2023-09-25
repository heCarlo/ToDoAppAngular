import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title: string = 'Nova tarefa';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const task = this.taskService.getById(parseInt(id));
      if (task !== undefined) {
        this.task = task;
        this.title = 'Alterando tarefa';
      } else {
        // Lida com o cenário em que a tarefa não foi encontrada
        // Por exemplo, redirecionar para uma página de erro ou tratar de outra forma
      }
    }
  }


  onSubmit() {
    this.router.navigate(['']);
  }
}
