import styled from 'styled-components';
import NovaFont from '../../Assets/ProximaNova-Bold_gdi.woff'
import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
    @font-face {
        url(${NovaFont}) format('woff'),
        font-style: normal;
    }
`;

export const DivHeader = styled.div`
    width: 100%;
    margin: auto;
    display: inline;
`;


export const NavUl = styled.ul`
    display: inline;
    float: left;
    width: 45%;
    text-align: left;
    white-space: nowrap;
    margin: 0 0 0 5%;
    list-style: none;
`;

export const NavLi = styled.li`
    border: none;
    font-family: ProximaNova-Bold,ProximaNovaA-Bold,ProximaNovaS-Bold,proxima-nova,Arial;
    font-weight: 400;
    font-size: 14px;
    color: #999;
    display: inline-block;
    float: none;
    vertical-align: top;
    position: relative;
    height: 60px;
`;

export const ImgLogo = styled.img`
    float: right;
    max-width: 100%;
    display: inline-block;
`;

export const DivImg = styled.div`
    display: inline;
    float: left;
    width: 15%;
    margin: 10px 0 0 5%;
`;

export const ANav = styled.a`
    width: auto;
    height: 60px;
    font-family: ProximaNova-Semibold,proxima-nova,Arial;
    font-weight: 500;
    font-size: 14px;
    line-height: 60px;
    padding: 0;
    margin: 0 8px;
    text-shadow: none;
    text-transform: none;
    color: #555;
    float: none;
    display: block;
    text-align: left;
    text-decoration: none;
    transition-property: color;
    transition-duration: .3s;
`;

export const Login = styled.div`
    width: 90px;
    margin-left: 0;
    margin-right: 13px;
    text-align: right;
    display: inline-block;
    line-height: normal;
    padding: 23px 0 0;
`;

export const Call = styled.div`
    width: 90px;
    padding: 2px 16px 0 12px;
    font-size: 16px;
    height: 47px;
    color: #555;
    margin: auto;
    display: inline-flex;
    &:hover{
        span{
            color: #0064bf;
        }
        span:nth-of-type(2){
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 4px solid #0064bf;
        }
    }
`;

export const LoginImg = styled.img`
    width: 16px;
    height: 16px
`;

export const LoginSpan = styled.span`
    color: #0064bf;
    font: 600 12px/1.2em ProximaNova-Bold;
    margin-right: 8px;
`;

export const WhatsAppImg = styled.img`
    width: 21px;
    height: 21px;
    float: left;
    margin-right: 5px;
    margin-top: 19px;
`;

export const Divider = styled.span`
    width: 1px;
    height: 25px;
    display: block;
    content: "";
    background: #DDD;
    margin-top: 16px;
`;

export const DivRight = styled.div`
    width: 20%;
    width: auto; 
    display: inline-flex;
`;

export const WhatsAppText = styled.span`
    font-family: ProximaNova-Semibold,proxima-nova,Arial;
    font-weight: 500px;
    margin-right: 5px;
    margin-top: 23px;
    font-size: 16px;
    color: #555;
`;

export const ButtonWhatsApp = styled.span`
    margin-right: 8px;
    margin-top: 30px;
    width: 0; 
    height: 0; 
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #555;
`;