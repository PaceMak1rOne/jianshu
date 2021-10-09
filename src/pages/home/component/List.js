import React, { Component } from 'react'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
import { actionCreators } from '../store';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
class List extends Component {
    render() {
        let { list , getMoreList , page } = this.props;
        return (
         <div>
             {
                 list.map((value,index)=>{
                     return(
                         <Link  key={index} to={'/detail/' + value.get('id')}>
                        <ListItem>
                        <img className="pic" alt="" src={value.get('imgUrl')} />
                       <ListInfo>
                       <h3 className="title">{value.get('title')}</h3>
                       <p className="desc">{value.get('desc')}</p>
                       </ListInfo>
                       </ListItem>
                       </Link>
                     )
                 })
             }
               
         <LoadMore onClick={()=>getMoreList(page)}>加载更多</LoadMore>
         </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    list : state.getIn(['home','articleList']) ,
    page : state.getIn(['home','articlePage'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      getMoreList(page){
     dispatch(actionCreators.getMoreList(page))
      }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(List)
