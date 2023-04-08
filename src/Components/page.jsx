import React, { useState } from "react";
import * as S from "./page_style.jsx";
import Logo from "../assets/logo.png";
import Frapucino from "../assets/frapuccino.png";
import Moon from "../assets/moon.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import Sun from "../assets/sol.png"
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./Theme.jsx";
export default function Page() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeProvider theme={mode === false ? LightTheme : DarkTheme}>
      <S.GlobalStyle />
      <S.Header>
        <S.LogoBox>
          <img src={Logo} alt="#" />
        </S.LogoBox>
        <S.NavBox>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>What´s New</li>
            <li>Contact</li>
          </ul>
          <S.IconCircle>
            <img
              onClick={() => {
                setMode(!mode);
              }}
              src={mode === false ? Moon:Sun}
              alt="#"
            />
          </S.IconCircle>
        </S.NavBox>
      </S.Header>
      <S.MainBox>
        <S.FirstSectionMain>
          <S.MainText>
            <h1>
              It's not just Coffee It's <S.Starbucks>Starbucks</S.Starbucks>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor indicididunt labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo.
            </p>
            <S.ButtonText>Learn More</S.ButtonText>
          </S.MainText>
          <S.SocialMediaBox>
            <S.SocialMedia href="#">
              <img src={facebook} alt="#" />
            </S.SocialMedia>
            <S.SocialMedia href="#">
              <img src={twitter} alt="#" />
            </S.SocialMedia>
            <S.SocialMedia href="#">
              <img src={instagram} alt="#" />
            </S.SocialMedia>
          </S.SocialMediaBox>
        </S.FirstSectionMain>
        <S.SecondSectionMain>
          <S.FrapuccinoCircle></S.FrapuccinoCircle>
          <S.Frapuccino src={Frapucino} alt="#" />
        </S.SecondSectionMain>
      </S.MainBox>
    </ThemeProvider>
  );
}
