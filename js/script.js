const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            todolist: 
            [
                {
                    text: "comprare Albicocche",
                    done: false,
                },
                {
                    text: "Sgargiulli",
                    done: true,
                },
                {
                    text: "Amogus?",
                    done: false,
                },
            ]
        }
    },
    methods: {
        addTask()
        {
            let object = {
                text: this.newTask,
                done: false
            }
            this.todolist.push(object);
            this.newTask = '';
        },
        checkTask(index)
        {
            let task = this.todolist[index];
            if(task.done == true) {
                task.done = false;
            }
            else{
                task.done = true;
            }
        },
        deleteTask(index)
        {
            this.todolist.splice(index, 1)
        }
    },
}).mount('#app')