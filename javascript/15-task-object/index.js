const ToDoList = {
    tasks: [
        {
            id: 1,
            title: 'Помыть посуду',
            priority: 1
        },
    ],
    addNewTask: function (id, title, priority) {
        this.tasks.push({id, title, priority})
    },
    findTaskById: function (id) {
        return this.tasks.find(task => task.id === id)
    },
    removeTaskById: function (id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    },
    updateTaskById: function (id, title, priority) {
        const task = this.findTaskById(id)
        task.title = !title ? task.title : title
        task.priority = !priority ? task.priority : priority
    },
    sortTasksPriority: function () {
        this.tasks.sort((a,b) => a.priority - b.priority)
    }
}

ToDoList.addNewTask(2, 'Погулять с собакой', 2)
ToDoList.findTaskById(2)
ToDoList.addNewTask(3, 'Сходить в магазин', 5)
ToDoList.addNewTask(4, 'Сходить в магазин', 3)
ToDoList.addNewTask(5, 'Заправить машину', 2)
ToDoList.removeTaskById(2)
ToDoList.updateTaskById(5,'Заправить машину жены', 3)
ToDoList.sortTasksPriority()