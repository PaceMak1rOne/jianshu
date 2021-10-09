import React,{Component} from 'react';
import { actionCreators }  from './store'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
import { 
    HeaderWrapper ,
     Logo,
     Nav,
     NavItem,
     NavSearch,
     Addition,
     Button,
     SearchWrapper,
     SearchInfo,
     SearchInfoTitle,
     SearchInfoSwitch,
     SearchInfoItem,
     SearchInfoList
} from './style'
import  {actionCreators as loginActionCreators} from '../../pages/login/store';
import { Link } from 'react-router-dom';

class Header extends Component{
    getListArea(){
        let { focused,list,page,totalPage,mouseIn,haddleMouseEnter,haddleMouseLeave,haddleChangePage}=this.props;
        // toJS变成js对象
        let newList = list.toJS();
        let pageList = [];
        if(newList.length){
              for(let i= ( page - 1) * 10 ; i < page * 10; i++){
          pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
             )
           }
        }

         if( focused || mouseIn){
             return(
        <SearchInfo 
        onMouseEnter={ haddleMouseEnter}
        onMouseLeave={ haddleMouseLeave}
        > 
        <SearchInfoTitle>
            热门搜索
        <SearchInfoSwitch onClick={()=>haddleChangePage(page,totalPage ,this.spinIcon)}>
            <span className="iconfont spin" ref={(icon)=>{this.spinIcon=icon}}>&#xe77e;</span>换一批
            </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
        {pageList}
        </SearchInfoList>
    </SearchInfo>
    )
     }else{
        return null
    }
}
    render(){
        let {focused,haddleBlur,haddleFocus,list,login,logout} = this.props
        return(
            <HeaderWrapper>
                <Link to="/">
               <Logo />
               </Link>
               <Nav>
                 <NavItem className="left active">首页</NavItem>
                 <NavItem className="left">下载App</NavItem>
                 {login ? 
                 <NavItem className="right" onClick={logout}>注销</NavItem>
                  : <Link to="/login"><NavItem className="right">登陆</NavItem></Link>}
                 
                 <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                 {/* 搜索框 */}
                 <SearchWrapper>
                     {/* 搜索框动画效果 */}
                 <CSSTransition
                 in={focused}
                 timeout={200}
                 classNames="slide"
                 >
                 <NavSearch className={focused ? "focused" : ""}
                 onFocus={()=>haddleFocus(list)}
                 onBlur={haddleBlur}
                 >
                 </NavSearch>
                 </CSSTransition>
                 <span className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe624;</span>
                 {this.getListArea(focused)}
                 </SearchWrapper>
                 <Addition>
                     <Link to="/writer">
                     <Button className="writting"><span className="iconfont">&#xe708;</span>写文章</Button>
                     </Link>
                     <Button className="reg">注册</Button>
                 </Addition>
               </Nav>
            </HeaderWrapper>
            )
    }

}
 const mapStateToProps = (state) =>{
     console.log(state)
     return{
        //  immtable里要获取值的话要用到.get方法
     focused: state.getIn(["header","focused"]),
     list : state.getIn(['header',"list"]),
     page: state.getIn(["header","page"]),
     mouseIn : state.getIn(["header","mouseIn"]),
     totalPage: state.getIn(["header","totalPage"]),
     login: state.getIn(['login' , 'login' ])
     }
  }
const mapDispatchToProps = (dispatch) => {
      return {
         haddleFocus(list){
             (list.size===0) && dispatch(actionCreators.getList());
             
             dispatch(actionCreators.searchFocus());
         },
         haddleBlur(){  
            dispatch(actionCreators.searchBlur());
        },
        haddleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        haddleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        haddleChangePage(page,totalPage,spinIcon){
        let originAngle = spinIcon.style.transform.replace(/{^0-9/ig, "")
          if( originAngle) {
              originAngle = parseInt(originAngle, 10);
          }else{
              originAngle = 0;
          }
            spinIcon.style.transform = 'roteta(' +(originAngle+ 360)+'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
        dispatch(loginActionCreators.logout())
        }
          }
      }
  

  export default connect(mapStateToProps,mapDispatchToProps)(Header)
