export const ins ="INSERIR"
export const upd = "UPDATE"
export const del ="DELETE"

export const insData =(data)=>{
  return{
     type : ins,
     payload :data
  }

}

export const delData =(id)=>{
  return{
    type : del,
    payload:id
  }
}
export const updData=(id,data)=>{
  return{
    type : upd,
    payload:{id,data}
  }

}
