import { myAxios } from "./helper";

export const signUp=(user)=>{
    
        return myAxios
        .post("/register",user)
        .then((response)=> response.data())

}