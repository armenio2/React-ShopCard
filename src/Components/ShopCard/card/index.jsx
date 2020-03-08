import React from 'react';
import GolImg from '../../../Assets/gol.png'
import {
    DivCard,
    DivImg,
    TextType,
    DivBodyCard,
    TextDescription,
    FullDiv,
    Box,
    SubBox,
    TextValue,
    Value,
    TextTip,
    DivLeft,
    DivRight,
    DivCol,
    Button
} from './styles';

function Card({
    url = 'https://www.viajanet.com.br/busca/passagens/voos#/SAO/RIO/RT/01-11-2019/03-11-2019/-/-/-/1/0/0/-/-/BRL/-',
    text = 'Promoção de São Paulo para Rio de Janeiro',
    image = 'https://www.viajanet.com.br/static/assets/platform/img/catalog/RIO/rio-de-janeiro-nova.jpg',
}) {
    
    const alldate = url.match(/\d{2}([\/.-])\d{2}\1\d{4}/g);
    const init = alldate.toString().substring(0, 10)
    const end = alldate.toString().substring(11, 20)
    return (
        <DivCard>
            <DivImg src={image} />
            <DivBodyCard>
                <FullDiv>
                    <TextType>Passagem aérea</TextType>
                </FullDiv>
                <FullDiv>
                    <TextDescription>{text.replace('Promoção de ', '')}</TextDescription>
                </FullDiv>
                <FullDiv>
                    <Box>IDA</Box>
                    <SubBox>{new Date(init).getDay()}</SubBox>
                    <Box>VOLTA</Box>
                    <SubBox>{new Date(end).getDay()}</SubBox>
                </FullDiv>
                <DivCol>
                    <DivLeft>
                        <FullDiv>
                            <TextValue>A PARTIR DE:</TextValue>
                            <Value>R${100}</Value>
                        </FullDiv>
                        <FullDiv>
                            <TextTip>Valor Final, taxas inclusas!</TextTip>
                        </FullDiv>
                    </DivLeft>
                    <DivRight>
                        <img src={GolImg} alt="Companhia Aéreas Gol" class="card-list__logocia" />
                    </DivRight>
                </DivCol>
                <FullDiv>
                    <Button>Comprar agora!</Button>
                </FullDiv>
            </DivBodyCard>
        </DivCard>
    )
}

export default Card;
