import { createSlice } from '@reduxjs/toolkit'
import data from '../data/data.json'

const boardsSlice = createSlice({
    name: 'boards',
    initialState: data.boards,
    // reducers:{

    // }
//     reducers: {
//         addBoard: (state, action) => {
//             state.boards.push(action.payload)
//         },
//         deleteBoard: (state, action) => {
//             state.boards = state.boards.filter((board) => board.name !== action.payload)
// }
    })

export default boardsSlice 
