import React from 'react';
import Logo from '../../Assets/logo.svg'
import LoginSVG from '../../Assets/login.svg'
import { DivHeader, NavUl, NavLi, ImgLogo, DivImg, ANav, Login, Call, LoginSVGIMG, LoginSpan } from './styles';

function Header() {
    return (
        <DivHeader>
            <DivImg>
                <ImgLogo src={Logo} alt='logoViajaNet' />
            </DivImg>
            <NavUl>
                <NavLi><ANav href="#">Black Friday</ANav></NavLi>
                <NavLi><ANav href="#">Passagens Aéreas</ANav></NavLi>
                <NavLi><ANav href="#">Pacotes de Viagem</ANav></NavLi>
                <NavLi><ANav href="#">Hotéis</ANav></NavLi>
                <NavLi><ANav href="#">Carros</ANav></NavLi>
                <NavLi><ANav href="#">Seguros</ANav></NavLi>
                <NavLi><ANav href="#">QuandoViajar</ANav></NavLi>
                <NavLi><ANav href="#">Atendimento</ANav></NavLi>
            </NavUl>
            <Login>
                <LoginSpan>Entrar </LoginSpan>
                <LoginSVGIMG src={LoginSVG} alt='login' />
            </Login>
            <Call>

            </Call>
        </DivHeader >
    );
}

export default Header;
