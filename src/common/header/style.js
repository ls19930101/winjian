import styled from 'styled-components';
import logoPic from '../../statics/nav_logo_2x.png';

export const HeaderWrapper = styled.div`
positon:relative;
height:56px;
border-bottom:1px solid #f0f0f0;
`
export const Logo=styled.div`
position:absolute; 
top:0;
left:0;
display:block;
width:100px;
height:56px;
cursor:pointer;
background:url(${logoPic});
background-size:contain;
`
export const Nav=styled.div`
width:960px;
height:56px;
margin:0px auto;
padding-right:80px;
box-sizing:border-box;
`
export const NavItem=styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a;
}
`
export const SearchWrapper=styled.div`
position:relative
margin-left:20px;
float:left;
.zoom{
    position:absolute;
    right:5px;
    bottom:4px;
    width:30px;
    height：30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    color:#999;
    &.focused{
        background:#777;
        color:#fff;
      }
}
`

export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
width:160px;
height:38px;
border:#eee;
box-sizing:border-box;
margin-top:10px;
padding:0 40px 0 20px;
outline:none;
border-radius:40px;
background:#eee;
font-size:14px;
color:#666;
&.slide-enter{
    transition:all 0.3s ease-out;
}
&.slide-enter-active{
   width:240px
}
&.slide-exit{
    transition:all 0.3s ease-out;
}
&.slide-exit-active{
    width:160px;
}
&.focused{
    width:240px;
}
&::placeholder{
    color:#999;
}
`
export const SearchInfo=styled.div`
position:absolute;
background:#fff;
width:210px;
top:56px;
padding:20px 20px 10px 20px;
box-shadow:0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle=styled.div`
margin-bottom:15px;
font-size:14px;
color:#949494;
`
export const SearchInfoSwitch=styled.span`
float:right;
font-size:13px;
cursor:pointer;
.iconfont{
    font-size:12px;
    margin-right:2px;
}
`
export const SearchInfoList=styled.div`
overflow:hidden;
`
export const SearchInfoItem=styled.a`
display:block;
float:left;
cursor:pointer;
margin-right:10px;
margin-bottom:10px;
font-size:12px;
color:#787878;
line-height:20px;
padding:0 6px;
border:1px solid #ddd;
border-radius:3px;
`
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button = styled.div`
float:right;
height:40px;
line-height:36px;
margin-right:20px;
margin-top:8px;
padding:0 20px;
box-sizing:border-box;
border-radius:20px;
font-size:14px;
&.reg{
    color:#ec6149;
    border:1px solid #ec6149;
}
&.writting{
    color:#fff;
    background:#ea6f5a;
}
`