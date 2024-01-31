

import { createSlice } from "@reduxjs/toolkit"


export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: [
            {id:0, name:"Alex"},
            {id:1, name:"Bohdan"},
            {id:2, name:"Andrii"},
            {id:3, name:"Ivan"},
            {id:4, name:"Aman"},
        ]
    }
})


export default userSlice.reducer