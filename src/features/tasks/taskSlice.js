import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addLocalTask: (state, action) => {
            state.push(action.payload)
        },
        deleteLocalTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        }
    }
})

export const { addLocalTask, deleteLocalTask } = taskSlice.actions
export default taskSlice.reducer