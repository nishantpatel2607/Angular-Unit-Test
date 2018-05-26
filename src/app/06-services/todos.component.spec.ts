
//import { observable } from 'rxjs/symbol/observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/from';
import 'rxjs/add/Observable/empty';
import 'rxjs/add/Observable/throw';
import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {

    //Creating fake service
    spyOn(service, 'getTodos').and.callFake(()=>{
      return Observable.from([ [
      {id: 1, title: 'a'},
      {id: 2, title: 'b'},
      {id: 3, title: 'c'}
    ] ])
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
  });


  it ('should call the server to save the changes when a new item is added',() => {

    let spy =spyOn(service,'add').and.callFake(t => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });
  
  
  it ('should add the new todo returned from the server',() => {
    let todo ={id: 1, title: 'a'};

    let spy =spyOn(service,'add').and.returnValue(Observable.from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });
  
  it ('should set the message property if server returns an error when adding new todo',() => {
    let error = "error from the server";
    let spy =spyOn(service,'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);
  });


  it('should call the server to delete todo item if user confirms',() => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy =spyOn(service,'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);

  });
  
  it('should Not call the server to delete todo item if user cancels',() => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy =spyOn(service,'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalledWith(1);

  });
});