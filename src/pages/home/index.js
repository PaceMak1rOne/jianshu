import React, { Component } from 'react';
import { HomeWrapper,
         HomeLeft,
         HomeRight,
         BackTop
        } from './style';
import Topic from './component/Topic';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import List from './component/List';
import {connect} from 'react-redux';
import { actionCreators } from './store';
class Home extends Component {
    haddleScrollTop =() =>{
        window.scrollTo(0,0)
    }
    render() {
        let {haddleScrollTop} = this;
        let { showScroll } = this.props;
        return (
            <HomeWrapper>
             <HomeLeft>
                <img alt="" className="banner-img" src="https://wx4.sinaimg.cn/mw2000/006kXAOIgy1gu36ia253jj33nw2fxqv8.jpg"/>
            <Topic/>
            <List/>
             </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
               { showScroll ? <BackTop onClick={haddleScrollTop}><span className="iconfont">&#xe65d;</span></BackTop> : ""}
            </HomeWrapper>
        )
    }
    componentDidMount(){
    this.props.changeHomeData();
    this.bindEvent();
    }
    componentWillUnmount(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
       },
       changeScrollTopShow(){
       if(document.documentElement.scrollTop>100){
            dispatch(actionCreators.toggleTopShow(true))
       }else{
        dispatch(actionCreators.toggleTopShow(false))
       }
       }
    }
}
const mapStateToProps = (state) => {
    return {
       showScroll: state.getIn(['home','showScroll'])
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)