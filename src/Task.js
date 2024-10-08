class Task {
    id
    #title
    #priority
    #DueDate
    isCompleted
    static validPriority = ["high", "medium", "low"];

    constructor(id,title, priority, DueDate, isCompleted) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.#DueDate = DueDate;
        this.isCompleted = isCompleted;
    }



    printTask() {
        console.log(`${this.id} \n ${this.#title} \n ${this.#priority} \n ${this.#DueDate}  \n ${this.isCompleted}
            `);

    }

    set title(value) {
        if (typeof value === 'string' && value.length > 0)
            this.#title = value;
        else throw new Error("Title must be a non-empty string");

    }

    set priority(value) {
        if (Task.validPriority.includes(value))
            this.#priority = value;
        else throw new Error("priority must be high,medium or low");

    }

    set isCompleted(value) {
        if (typeof value === 'Boolean')
            this.isCompleted = value;
        else throw new Error("isCompleted must be true or false");
    }

}

export { Task };
