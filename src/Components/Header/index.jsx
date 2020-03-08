import React, { useState } from 'react';
import Logo from '../../Assets/logo.svg'
import LoginSVG from '../../Assets/login.svg'
import WhatsApp from '../../Assets/whatsapp.svg'
import WhatsAppBlue from '../../Assets/whatsapp-blue.svg'
import {
    DivHeader,
    NavUl,
    NavLi,
    ImgLogo,
    DivImg,
    ANav,
    Login,
    Call,
    LoginImg,
    LoginSpan,
    WhatsAppImg,
    Divider,
    DivRight,
    WhatsAppText,
    ButtonWhatsApp
} from './styles';

function Header() {
    const [hover, setHover] = useState(false)
    return (
        <DivHeader>
            <DivImg>
                <ImgLogo src={Logo} alt='logoViajaNet' />
            </DivImg>
            <NavUl>
                <NavLi><ANav href="#">Passagens Aéreas</ANav></NavLi>
                <NavLi><ANav href="#">Pacotes de Viagem</ANav></NavLi>
                <NavLi><ANav href="#">Hotéis</ANav></NavLi>
                <NavLi><ANav href="#">Carros</ANav></NavLi>
                <NavLi><ANav href="#">Seguros</ANav></NavLi>
                <NavLi><ANav href="#">QuandoViajar</ANav></NavLi>
                <NavLi><ANav href="#">Atendimento</ANav></NavLi>
            </NavUl>
            <DivRight>
                <Login>
                    <LoginSpan>Entrar </LoginSpan>
                    <LoginImg src={LoginSVG} alt='login' />
                </Login>
                <Divider />
                <Call onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <WhatsAppImg
                        src={hover ? WhatsAppBlue : WhatsApp}
                        alt='whatsAppIcone'
                    />
                    <WhatsAppText>Ligue</WhatsAppText>
                    <ButtonWhatsApp />
                </Call>
            </DivRight>
        </DivHeader >
    );
}

export default Header;
