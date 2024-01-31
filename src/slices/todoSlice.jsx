import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: [
            {id:0, name:"todo1", checked:false, uid: 0},
            {id:1, name:"todo2", checked:false, uid: 0},
            {id:2, name:"todo3", checked:false, uid: 1},
            {id:3, name:"todo4", checked:false, uid: 2},
            {id:4, name:"todo5", checked:false, uid: 1},
            {id:5, name:"todo6", checked:false, uid: 0},
            {id:6, name:"todo7", checked:false, uid: 3},
            {id:7, name:"todo8", checked:false, uid: 3},
            {id:8, name:"todo9", checked:false, uid: 1},
            {id:9, name:"todo10", checked:false, uid: 0},
        ]
    },
    reducers: {
        checked: (state, action) => {
            const { id } = action.payload;
            state.value = state.value.map(e => {
                if(e.id == id)
               {
                return {
                    ...e,
                    checked: !e.checked
                }
               }
               return e
            })
        }
    }
})

export const { checked } = todoSlice.actions


export default todoSlice.reducer