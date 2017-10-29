import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name: string;
  private age: number;
  private email: string;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
   };
   private todoList: Todo[];
   private isEditable: boolean = true;


  // array
  private skills: string[];

  constructor(private todoService: TodoService) {


  }

  ngOnInit() {
    this.name = "Natthaphong Pooseedin";
    this.age = 24;
    this.email = "npooseedin@gmail.com";

    this.address = {
      street: " 14/3 Rongsan Chiangkham ",
      city: " Chaingkham ",
      province: " Phayao ",
      postcode: " 56110 "
    };
    this.skills = ["Programming" , "Natthaphong", "Hansome"];
    this.todoService.getTodoList().subscribe((response) => {
      this.todoList = response;

    });
  }
  addSkill(skill) {
      this.skills.unshift(skill);
      return false;
    }

    removeSkill(skill) {
      this.skills.forEach((element, index) => {
        if (element === skill) {
          this.skills.splice(index , 1);
        }

      });
    }
    toggleEdit() {
      this.isEditable =! this.isEditable;
    }
}
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
