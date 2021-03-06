// 用css创建html标签
import styled  from "styled-components";
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
position: relative;
 height:58px ;
 border-bottom: 1px solid #f0f0f0;
`
// 简书logo
export const Logo = styled.div`
position: absolute;
top: 0px;
left: 0px;
height: 56px;
display: block;
width: 100px;
background: url(${logoPic});
background-size: contain;
`
export const Nav = styled.div`
width: 960px;
height: 100%;
margin: 0px auto;
padding-right: 70px;
box-sizing: border-box;
`

export const NavItem = styled.div`
line-height: 56px; 
padding:0 15px;
font-size: 17px;
color: #333;
&.left{
    float: left;
}
&.right{
    float: right; 
    color: #969696;
}
&.active{
    color: #ea6f5a;
}
`
// 搜索框      在写标签的里的属性是 .attrs
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})
`
width: 160px;
height: 38px;
border:none;
outline: none;
border-radius: 19px;
margin-top: 9px;
padding: 0px 30px 0px  20px;
box-sizing: border-box;
background: #eee;
font-size: 15px;
margin-left: 20px;
color: #777;
//&::设置标签属性的css样式
&::placeholder{
    color: #999;
}
&.focused{
    width: 240px;
}
&.slide-enter{
   transition: all .2s ease-out;
}
&.slide-enter-active{
    width: 240px;
}
&.slide-exit{
    transition: all .2s ease-out;
}
& .slide-exit-active{
    width: 160px;
}
` // 热门搜索
export const SearchInfo = styled.div`
 position: absolute;
 left: 0px;
 top: 60px;
 background: #fff;
 width: 240px;
padding: 0px 20px  ;
box-shadow:0 0 8px rgba(0,0,0, .2) ;
`

// 热门搜索 标题
export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`
//热门搜索 换一换
export const SearchInfoSwitch = styled.span`
 float: right;
 font-size: 13px;
 cursor: pointer;
 .spin{
  display: block;
  float: left;
  font-size: 12px;
  margin-right: 2px;
  transition: all .2s ease-in;
  transform-origin:center center ;
 }
`
//热门搜索
export const SearchInfoItem = styled.a`
font-size:  12px;
margin-right: 10px;
margin-bottom: 15px;
padding: 0px 5px ;
line-height: 20px;
border: 1px solid #ddd;
color: #787878;
border-radius: 3px;
display: block;
float: left;
cursor: pointer;
`
export const SearchInfoList= styled.div`
overflow: hidden;
`
 // 注册和写文章
export const Addition = styled.div`
position: absolute;
right: 0px;
top: 0px;
height: 56px;

`// 注册和写文章 
export const Button = styled.div`
float: right;
line-height: 38px;
margin-top: 9px;
border-radius: 19px;
border:1px solid #ec6149 ;
margin-right: 20px;
padding: 0px 20px;
font-size: 14px;
&.reg{
    color: #ec6149;
}
&.writting{
    background: #ec6149;
    color: #fff;
}
`
// 搜索框
export const SearchWrapper = styled.div`
float: left;
position: relative;

.zoom{
    position: absolute;
    right: 5px;
    bottom: 5px; 
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
        background: #777;
    color: #fff; 
    }
   
}
`