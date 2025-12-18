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

const newTask = {
    tasks: [
        { 
            id: 1, 
            name: 'тест', 
            description: 'описание',
            order: 0
        }
    ]
};

newTask.findTaskById = ToDoList.findTaskById;

const addNewTaskForNew = ToDoList.addNewTask.bind(newTask);
const findTaskByIdForNew = ToDoList.findTaskById.bind(newTask);
const removeTaskByIdForNew = ToDoList.removeTaskById.bind(newTask);
const updateTaskByIdForNew = ToDoList.updateTaskById.bind(newTask);
const sortTasksPriorityForNew = ToDoList.sortTasksPriority.bind(newTask);

addNewTaskForNew(2, 'контрольная', 1);
console.log('newTask после добавления:', newTask);

findTaskByIdForNew(2);
addNewTaskForNew(3, 'Сходить в магазин', 5);
removeTaskByIdForNew(2);
updateTaskByIdForNew(5, 'Заправить машину жены', 3);
sortTasksPriorityForNew();
console.log('newTask после операций:', newTask);

ToDoList.addNewTask(2, 'Погулять с собакой', 2)
console.log(ToDoList)
ToDoList.findTaskById(2)
ToDoList.addNewTask(3, 'Сходить в магазин', 5)
ToDoList.addNewTask(4, 'Сходить в магазин', 3)
ToDoList.addNewTask(5, 'Заправить машину', 2)
ToDoList.removeTaskById(2)
ToDoList.updateTaskById(5,'Заправить машину жены', 3)
ToDoList.sortTasksPriority()