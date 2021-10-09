import styled from "styled-components";
export const HomeWrapper = styled.div`
width: 960px;
margin: 0px auto;
overflow: hidden;
`;
export const HomeLeft = styled.div`
padding-top: 30px;
width: 655px;
float: left;
.banner-img{
    width: 655px;
};
`;
export const HomeRight = styled.div`
width: 280px;
margin: 0px auto;
height: 300px;
float: right;
`;
export const TopicWrapper = styled.div`
padding: 20px 0px 10px 0px;
overflow: hidden;
margin-left: -18px;
border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
float: left;
height: 32px;
margin-left: 18px;
line-height: 32px;
font-size: 14px;
background: #f7f7f7;
color: #000;
padding-right: 10px;
border: 1px solid #dcdcdc;
border-radius:4px ;
margin-bottom: 18px;
.topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
};
`;
export const ListItem = styled.div`
overflow: hidden;
padding: 20px 0px ;
border-bottom: 1px solid #dcdcdc;
.pic{
    display: block;
    width: 125px;
    height: 150px;
    float: right;
    border-radius: 10px;
    cursor: pointer;
};
`;
export const ListInfo = styled.div`
width: 500px;
float: left;
cursor: pointer;
.title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
};
.desc{
    line-height: 18px;
     font-size: 13px;
     color: #999;
}
`;
export const RecommendWrapper = styled.div`
margin: 30px 0px ;
width: 280px;
`;
export const RecommendItem = styled.div`
 width: 280px;
 height: 50px;
background: url(${(props)=> props.imgUrl});
background-size: contain;
margin-bottom: 6px;
cursor: pointer;
 `;
export const WriterWrapper = styled.div`
width: 278px;
border:  1px solid #dcdcdc;
border-radius: 3px;
height: 300px;
text-align: center;
`
export const LoadMore = styled.div`
width: 100%;
height: 40px;
line-height: 40px;
background: #a5a5a5;
border-radius: 20px;
 color: #fff;
 margin: 30px 0px;
 text-align: center;
 cursor: pointer;
`;
// 回到顶部
export const BackTop = styled.div`
width: 50px;
height: 50px;
position: fixed;
line-height: 50px;
text-align: center;
border: 1px solid #ccc;
right: 60px;
bottom: 30px;
.iconfont{
    display: block;
    cursor: pointer;
}
`