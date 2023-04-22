import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { todo } from '../modal/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http:HttpClient) { }

//get all todo from api
getAllTodos():Observable<todo>{
  return this.http.get<todo>(' https://todolist-api.glitch.me/api/todos');
}

// create date and time for create new todo
getDate(){
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  let dt = new Date();  // here store current date into dt datamember
  let d=dt.getDate();  // here store current date into d data member
  let m=monthNames[dt.getMonth()];  // here store current month into m data member
  let y=dt.getFullYear();

  let hour=dt.getHours();
  let min=dt.getMinutes();
let sec=dt.getSeconds();
let ft='';
if(hour>=12){
ft='PM'
}
else{
  ft='AM'
}
let customTimeStamp= d+'-' + m +'-' + y +' ' + hour +':'+min +':' +sec +ft;

return customTimeStamp;
}

// adding new todo or post methode()
addTodo(NewTodo:todo):Observable<todo>{
  return this.http.post<todo>(' https://todolist-api.glitch.me/api/todo',NewTodo);
}


//// selected todo  update , put methode
updateTodo(newTodo:todo,id:any):Observable<todo>{
  return this.http.put<todo>(' https://todolist-api.glitch.me/api/todo/'+id,newTodo);

}

// delete methode()
deleteTodo(id:any):Observable<todo>{
  return this.http.delete<todo>('https://todolist-api.glitch.me/api/todo/'+id);
}
}
