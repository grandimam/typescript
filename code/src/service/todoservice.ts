import { TodoItem } from "../model/todoitem.js";

export class TodoService {
    private nextId: number = 1;
    private todoItems = new Array<TodoItem>();

    public addNewTodo(item: TodoItem): number {
        this.nextId += 1;
        this.todoItems.push(item);
        return this.nextId;
    }

    public getTodoById(id: number): unknown | TodoItem {
        return this.todoItems.find(x => x.getId() === id);
    }
    
    public markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            (todoItem as TodoItem)?.setCompleted(complete);
        }
    }
}