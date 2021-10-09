import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
const changeList = (data) =>({
    type: constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)
});

export const searchFocus = () =>{
    return {
        type : constants.SEARCH_FOCUS
    } 
}
export const searchBlur = () =>{
    return {
        type : constants.SEARCH_BLUR
    }
}
export const mouseEnter = () =>{
  return{
    type : constants.MOUSE_ENTER
  }
}
export const mouseLeave = () =>{
    return{
      type : constants.MOUSE_LEAVE
    }
  }
  export const changePage = (page) =>{
      return{
        type : constants.CHANGE_PAGE,
        page
      }
  }
export const getList = () =>{
    return dispatch =>{
        axios.get("/api/headerList.json")
        .then(res=>{
            const data=res.data;
            // console.log(data)
            dispatch(changeList(data.data));
        })
        .catch(err=>{console.log(err.message)})
    }
}