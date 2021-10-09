import * as constants from './constants'
import { fromJS } from 'immutable';
const defaulState = fromJS({
    focused: false,
    list:[],
    page: 1,
    //总共还有多少页
    totalPage : 1,
    mouseIn:false
});

export default  (state = defaulState, action) => {
    switch(action.type){
            //immutable对象的set方法,会结合之前immutable对象的值
        //和设置的值,返回一个全新的覆盖
        case constants.SEARCH_FOCUS :
            return  state.set("focused", true);
        case constants.SEARCH_BLUR :
             return  state.set("focused", false);
        case constants.CHANGE_LIST :
            return state.merge({
                list : action.data,
                totalPage : action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case constants.CHANGE_PAGE:
            return state.set('page',action.page)
            default :return state;
    }
}