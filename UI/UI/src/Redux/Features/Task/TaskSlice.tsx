import type { RootState } from "@/Redux/store";
import type { ITask } from "@/Type";
import { createSlice } from "@reduxjs/toolkit";


interface initialPlace {
    tasks: ITask[];
}

const initialState: initialPlace ={
    tasks:[
        {
     id: "ekjf6jkk",
     title: "Task 1",
     description:"Task 1 Docs and Routing",
     dueDate: "2025-11",
     isCompleted: false,
     priority: "High",
    },
    {
     id: "ekjf6jkk",
     title: "Task 2",
     description:"Task 1 Docs and Routing",
     dueDate: "2025-11",
     isCompleted: false,
     priority: "High",
    },
    {
     id: "ekjf6jkk",
     title: "Task 3",
     description:"Task 1 Docs and Routing",
     dueDate: "2025-11",
     isCompleted: false,
     priority: "High",
    },
    ]
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export default taskSlice.reducer;