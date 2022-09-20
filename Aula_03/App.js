import React from 'react';
import styled from 'styled-components/native';


const Title_principal = styled.Text`
  color: #fff;
  text-align: center;
  vertical-align: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 400px;
  font-size: 100px;
`;

const Card = styled.View`
width: auto;
min-width: auto;
height: 100%;
min-height: auto;
background-image: -webkit-linear-gradient(30deg, #FF8C00 50%, #000 50%);
`;

const Subtitle = styled.Text`
  color: #fff;
  text-align: center;
  vertical-align: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 0px;
  font-size: 15px;
`;

const Div_latR = styled.Text`
  color: #fff
  text-align: right;
  margin-right: 5%;
  margin-top: -25%;
  font-size: 20px;
`;



export default () => (

    <Card>

    <Title_principal>LOY</Title_principal>
    <Subtitle>Artigos esportivos</Subtitle>
    <Div_latR> Somos uma empresa focada em artigos esportivos.</Div_latR>
    </Card>
    
);