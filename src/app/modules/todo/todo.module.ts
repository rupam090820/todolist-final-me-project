import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
// import HttpClientModule
import{HttpClientModule} from '@angular/common/http';
//import NgxPaginationModule
import { NgxPaginationModule } from 'ngx-pagination';
// for searchPipe
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// for 2 way data binding and it also needed for searchPipe
import{FormsModule} from '@angular/forms';

import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    TodoComponent,
    
    SpinnerComponent
  ],
 
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class TodoModule { }
