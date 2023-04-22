import { Component, OnInit } from '@angular/core';
// import todo api-service
import { TodoApiService } from '../service/todo-api.service';
//import modal
import { todo } from '../modal/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // create data member for store todo ( it is for get Methode() )
  public AllTodos: any = [];
  public loading: boolean = false;
  public p: number = 1;  // for pagination
  public total: number = 0; // for pagination, total length
  public searchtodo: any; // for search pipe
  // end get methode data member decleration


  // create data member for post methode or create new todo 
  // public newTodo:any=[];
  public newTodo: todo = {} as todo;



  constructor(private apiservices: TodoApiService,private route:Router) {
    // this.newTodo = new todo('meanstack', 'this is mongodb', this.apiservices.getDate());  // here create new todo ( it is for post metode or create new todo portion)
    this.newTodo = new todo('', '', '');  // here create new todo ( it is for post metode or create new todo portion)
  }



  // start here of get Methode()
  populateTode() {
    this.loading = true;
    this.apiservices.getAllTodos().subscribe((data: any) => {
      this.AllTodos = data;
      this.loading = false;
      // console.log(this.AllTodos);
      console.table(this.AllTodos);
      this.total = this.AllTodos.length();
     
    });
   
  }
  // end here of get Methode()

  ngOnInit(): void {
    this.populateTode();
  }

  // search portion
  search() {
    if (this.searchtodo == "") {
      this.ngOnInit();
    }
    else {
      this.AllTodos = this.searchtodo.filter((res: any) => {
        return res.searchtodo.toLocalLowerCase().match(this.searchtodo.toLocalLowerCase());
      })
    }
  }

  // create new todo function
  AddTodo() {
    console.log(this.newTodo);
    this.apiservices.addTodo(this.newTodo).subscribe((item: any) => {
      console.log(item);
      alert(item.msg);
      this.populateTode();
    });
  }

  //select todo from todo's operation

  public selectedTodo: any = [];
  select(a: any) {

    this.selectedTodo = a;
    //console.log(this.selectedTodo);
    this.newTodo = new todo(this.selectedTodo.title, this.selectedTodo.description, this.apiservices.getDate());
  }

  // for update todo, put method()
  updateTodo() {
    console.log(this.newTodo);
    this.apiservices.updateTodo(this.newTodo, this.selectedTodo._id).subscribe((item: any) => {
      //console.log(item);
      this.populateTode();
      alert(item.msg);
    });
  }

  // for delete , delete methode.....
  deleteTodo() {
    let id = this.selectedTodo._id;
    //console.log(id);
    this.apiservices.deleteTodo(id).subscribe((item: any) => {
      console.log(item);
      this.populateTode();
      alert(item.msg)
    });

  }

  //logout methode
  logout(){
    localStorage.clear();
    alert('LogOut Successfully!!')
    this.route.navigateByUrl('/home');
  }
}
