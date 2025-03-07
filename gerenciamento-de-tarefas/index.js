class Task {
    constructor(title, description, priority = "Baixa", dueDate = null) {
        this.id = Task.incrementId();
        this.title = title;
        this.description = description;
        this.status = "Pendente";
        this.priority = priority; 
        this.dueDate = dueDate ? new Date(dueDate) : null; 
    }

    static incrementId() {
        if (!this.lastId) this.lastId = 1;
        else this.lastId++;
        return this.lastId;
    }

    completeTask() {
        this.status = "Concluída";
    }

    updatePriority(newPriority) {
        this.priority = newPriority;
    }

    updateDueDate(newDueDate) {
        this.dueDate = new Date(newDueDate);
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description, priority, dueDate) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const task = new Task(title, description, priority, dueDate);
                this.tasks.push(task);
                resolve(task);
            }, 
        });
    }

    listTasks(status = null) {
        if (status) {
            return this.tasks.filter(task => task.status === status);
        }
        return this.tasks;
    }

    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completeTask();
            return `Tarefa "${task.title}" marcada como concluída!`;
        } else {
            return `Tarefa com ID ${id} não encontrada.`;
        }
    }

    updateTaskPriority(id, newPriority) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.updatePriority(newPriority);
            return `Prioridade da tarefa "${task.title}" atualizada para "${newPriority}".`;
        } else {
            return `Tarefa com ID ${id} não encontrada.`;
        }
    }

    updateTaskDueDate(id, newDueDate) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.updateDueDate(newDueDate);
            return `Data de vencimento da tarefa "${task.title}" atualizada para "${newDueDate}".`;
        } else {
            return `Tarefa com ID ${id} não encontrada.`;
        }
    }
}

// Uso da classe TaskManager
(async () => {
    const manager = new TaskManager();

    console.log("Adicionando tarefas...");
    await manager.addTask("Estudar JavaScript", "Revisar closures e promises", "Alta", "2025-03-10");
    await manager.addTask("Praticar exercícios", "Resolver problemas no Codewars", "Média", "2025-03-12");

    console.log("Todas as Tarefas:", manager.listTasks());

    console.log("\nFiltrando por status 'Pendente':", manager.listTasks("Pendente"));

    console.log("\nMarcando a primeira tarefa como concluída...");
    console.log(manager.completeTask(1));

    console.log("\nAtualizando prioridade da segunda tarefa...");
    console.log(manager.updateTaskPriority(2, "Alta"));

    console.log("\nAtualizando data de vencimento da segunda tarefa...");
    console.log(manager.updateTaskDueDate(2, "2025-03-15"));

    console.log("\nLista de tarefas após as atualizações:");
    console.log(manager.listTasks());
})();
