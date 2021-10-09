import { fromJS } from 'immutable';
import * as constants from './constants';
const defaulState = fromJS({
  title: "",
  content: ""
 });
export default (state = defaulState, action) => {
   switch ( action.type) {
       case constants.CHANGE_DETAIL:
           return state.merge({
               title : action.title,
               content: action.content
           })
       default:
           return  state;
   }
}
