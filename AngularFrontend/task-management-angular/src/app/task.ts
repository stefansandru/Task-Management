
export class Task {
    id: number | null;
    title: string;
    description: string;
    deadline: string;
    daysUntilDeadline: number;
    completed: boolean;

    constructor(id: number | null,
         title: string, 
         description: string, 
         deadline: string,
         daysUntilDeadline: number, 
         completed: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.daysUntilDeadline = daysUntilDeadline;
        this.completed = completed;
    }
}
