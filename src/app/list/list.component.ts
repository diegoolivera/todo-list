import { Component, OnInit } from '@angular/core';
import { Tudo } from 'src/class/Tudo.model';

@Component({
  selector: 'List',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  tudos: Tudo[] = [];
  todoName: string = '';


  clearInput=()=>{
    let inputTudo = <HTMLInputElement>document.getElementById("inputTudo")
    inputTudo.value = " "

  }

  agregarTodo = () => {

    if (this.todoName) {
      let todo = new Tudo(this.todoName);
      if (this.tudos.some((t) => t.nombre === todo.nombre)) {
        alert('ya existe');
        return;
      } else {
        this.tudos.push(todo);
      }
    }
    this.clearInput()
  };

  deleteTodo = (id: number) => {
    this.tudos = this.tudos.filter((t, i) => i !== id);
  };

  check = (id: number) => {
    this.tudos[id].completo = !this.tudos[id].completo;
  };
}
