export class TodoItem {
    private id: number;
    private task: string;
    private complete: boolean;

    public constructor(id: number, task: string, complete: boolean) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    public getId(): number {
        return this.id;
    }

    public setCompleted(complete: boolean): void {
        this.complete = complete;
    }

    public printDetails(): void {
        console.log(`${this.id}\t ${this.task}\t ${this.complete}`);
    }
}