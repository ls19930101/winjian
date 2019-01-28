import styled from 'styled-components';

export const HomeWrapper=styled.div`
overflow:hidden
width:960px;
margin:0 auto;
`
export const HomeLeft=styled.div`
overflow:hidden;
float:left
width:625px;
padding-left:15px;
padding-top:30px;
.banner-img{
    width:625px;
    height:270px;
    margin-bottom:30px;
}
`
export const HomeRight=styled.div`
float:left;
width:280px;
margin-left:40px;
padding:30px 0 0;
`
export const BackTop=styled.div`
position:fixed;
right:60px;
bottom:60px;
width:50px;
height:50px;
text-align:center;
font-size:13px;
line-height:50px;
cursor:pointer;
border:1px solid #dcdcdc;
background:#fff;


`

export const ListItem=styled.div`
overflow:hidden;
float:left;
padding:15px 2px 20px 0;
margin-bottom:15px;
border-bottom:1px solid #f0f0f0;
box-sizing:border-box;
.pic{
    float:right;
    margin-top:20px;
    width:150px;
    height:100px; 
    border-radius:4px;
}
`
export const ListLine=styled.div`
margin:-5px 0 15px;
border-top:1px solid #f0f0f0;
`

export const ListInfo=styled.div`
float:left;
display:block;
width:458px;
margin-right:15px;
font-size:13px;
line-height:24px;
color:#999;
.title{
    margin:-7px 0 4px;
    font-size:18px;
    font-weight:700;
    line-height:1.5;
    color:#333;
    display: inherit;
    text-decoration:none;
}
.desc{
    line-height:24px;
    font-size:13px;
    margin:0 0 8px;
}
`

export const ListAciton=styled.div`
padding-right: 0!important;
font-size:12px;
font-weight:400;
line-height:20px;
.action {
    margin-right:10px;
    color:#b4b4b4;
    text-decoration:none;
}
.iconfont{
    font-size:13px;
    margin-right:2px;
}
`
export const LoadMore=styled.div`
height:40px;
width:100%;
display:inline-block;
border-radius:20px;
cursor:pointer;
text-align:center;
line-height:1.42857;
color: #fff;
box-sizing:border-box;
font-size:15px;
margin:15px auto 60px;
padding:10px 15px;
background-color:#a5a5a5;
`
export const RecommendsWrapper=styled.div`
overflow:hidden;
margin-top:-4px; 
padding-bottom:4px;
min-height:228px;
box-sizing:border-box;
`

export const RecommendsItem=styled.a`
cursor:pointer;
box-sizing:border-box;
.chahua{
    width:100%;
    min-height:50px;
    margin-bottom:4px;
    border-radius:4px;
}
`

export const DownloadWrapper=styled.div`
overflow:hidden;
float:left;
cursor:pointer;
width:280px;
display:flex;
padding:10px 20px;
margin-bottom:30px;
box-sizing:border-box;
border:1px solid #f0f0f0;
border-radius:6px;
.qrcode{

    width:60px;
    height:60px;
    opacity:.85;
}
`
export const DownloadInfo=styled.div`
display:inline-block;
margin:auto 7px;
line-height:1.42857;
.title{
    font-size:15px;
    color:#333;
}
.desc{
    font-size:13px;
    margin-top:4px;
    color:#999;
}
`

export const WritersWrapper=styled.div`
margin-top:60px;
width:280px;
height:60px;
`
export const WritersInfoTitle=styled.span`
font-size:14px;
color:#969696;
`
export const WritersInfoSwitch=styled.a`
float:right;
cursor:pointer;
.iconfont{
    font-size:14px;
    margin-right:4px;
}

`

export const WritersInfoList=styled.div`
margin:0 0 20px;
`
export const WritersInfoItem=styled.div`
margin-top:15px;
line-height:20px;
.user{
    float:left;
    width:48px;
    height:48px;
    margin-right:10px;
    border-radius:24px;
}
.follow{
    float:right;
    margin-top:5px;
    font-size:13px;
    color:#42c02e;
    text-decoration:none;
    .iconfont{
        font-size:14px;
    }
}
.name{
    padding-top:5px;
    margin-right:60px;
    font-size:14px;
    color:#333;
    cursor:pointer;
    display:block;
    text-decoration:none;
}
.writerinfo{
    margin-top:2px;
    font-size:12px;
    color:#969696;
    margin:0 0 10px;
}
`
export const MoreWriter=styled.div`
padding:7px 12px;
background-color:#f7f7f7;
border:1px solid #dcdcdc;
border-radius:4px;  
cursor:pointer;
text-align:center;
font-size:13px;
color:#787878;
line-height:1.42857;
.iconfont{
    font-size:14px;
    margin-left:4px;
}
`