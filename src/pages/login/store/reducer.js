import { fromJS } from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
 login : false
}) ;

export default ( state=defaultState , action ) => {
    switch (action.type) { 
        case constants.CHANGE_LOGIN :
            return state.set("login", action.value)
            case constants.CHANGE_LOGOUT :
                return state.set("login", action.value)
                case constants.CHANGE_LIST :
            return state.merge({
                list : action.data,
                totalPage : action.totalPage
            })
        default:
        return state;    
        ;
    }
}