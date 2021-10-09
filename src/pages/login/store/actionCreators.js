import axios from "axios"
import * as constants from './constants'
const changeLogin = () => {
    return{
        type:constants.CHANGE_LOGIN,
        value: true
    }
}
export const logout = () => {
    return{
        type:constants.CHANGE_LOGOUT,
        value: false
    }
}
 export const login = (accout , password) => {
    return (dispatch) => {
     axios.get('/api/login.json?accout='+ accout + '&password' + password )
     .then(res=>{
         const result = res.data.data;
         if(result){
     dispatch(changeLogin())
         }else{
             alert("登录失败")
         }
         console.log(res);
     })
     .catch(e=>{
         alert(e.message);
     })
    }
}