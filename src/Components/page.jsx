import React, { useState } from "react";
import * as S from "./page_style.jsx";
import Logo from "../assets/logo.png";
import Frapucino from "../assets/frapuccino.png";
import Moon from "../assets/moon.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import Sun from "../assets/sol.png"
export default function Page() {
  const [mode, setMode] = useState(false);
  return (
    <>
      <S.GlobalStyle />
      <S.Header isDark={mode}>
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
          <S.IconCircle isDark={mode}>
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
      <S.MainBox isDark={mode}>
        <S.FirstSectionMain>
          <S.MainText isDark={mode}>
            <h1>
              It's not just Coffee It's <span style={{color: mode === false ?" #0c8052":'#05F99E' }}>Starbucks</span>
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
            <S.SocialMedia isDark={mode} href="#">
              <img src={facebook} alt="#" />
            </S.SocialMedia>
            <S.SocialMedia isDark={mode} href="#">
              <img src={twitter} alt="#" />
            </S.SocialMedia>
            <S.SocialMedia isDark={mode} href="#">
              <img src={instagram} alt="#" />
            </S.SocialMedia>
          </S.SocialMediaBox>
        </S.FirstSectionMain>
        <S.SecondSectionMain>
          <S.FrapuccinoCircle></S.FrapuccinoCircle>
          <S.Frapuccino src={Frapucino} alt="#" />
        </S.SecondSectionMain>
      </S.MainBox>
    </>
  );
}
