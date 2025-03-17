  import{createSlice}from '@reduxjs/toolkit'
const initialState ={
  data:[]
}
const RtkReducer = createSlice({
  name : "userCrud",
  initialState,
  reducers:{
    
    add:(state,action)=>{
      state.data=[
        ...state.data, 
        action.payload
      ]
    },
    del:(state,action)=>{
      state.data=state.data.filter((i,index)=>{
        return index!=action.payload

      })

    },
    upd:(state,action)=>{
       state.data=state.data.map((i,index)=>{
        if (index==action.payload.id) {
          i= action.payload.userinfo
        } 
        return i  
       })
    }
    
    }
  
})
export const {add,del,upd}=RtkReducer.actions
export default RtkReducer.reducer
 
