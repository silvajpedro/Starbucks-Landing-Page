import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Poppins", sans-serif;
  }
  body{
  background-color: ${(props)=> props.theme.colors.background};
  transition: ease-in-out 0.4s;
}
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.header_text};
  height: 14vh;
`;
export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  width: 15vw;
  img {
    width: 5.5vw;
  }
`;
export const NavBox = styled.nav`
  display: flex;
  align-items: center;
  width: 40vw;
  ul {
    display: flex;
    justify-content: space-between;
    width: 70%;
    list-style: none;
  }
  li {
    font-size: 1.46vw;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      transform: scale(106%);
    }
  }
`;
export const IconCircle = styled.div`
  background-color: ${props => props.theme.colors.icon}; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  width: 3.6vw;
  height: 7.2vh;
  margin-left: 2vw;
  transition:ease-in-out 0.5s;

`;
export const ImgCircle = styled.img.attrs(props => ({
  src: `${props.theme.colors.modeImage}`
}))`
 width: 2.5vw;
 border:solid;
`
export const MainBox = styled.main`
  display: flex;
  align-items: flex-end;
  height: 86vh;
  transition: ease-in-out 0.4s;
`;
export const FirstSectionMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 73vh;
`;
export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45vw;
  height: 45vh;
  color: ${(props) => props.theme.colors.main_text};
  h1 {
    width: 30vw;
    font-size: 3.22vw;
    line-height: 9vh;
  }
  p {
    font-size: 1.17vw;
  }
`;
export const Starbucks = styled.span`
 font-size: 3.10vw;
 color: ${(props) => props.theme.colors.main_title};
`
export const ButtonText = styled.button`
  background-color: #036940;
  border-radius: 20px;
  border: none;
  color: #ffff;
  margin-top: 1.23vh;
  cursor: pointer;
  width: 11vw;
  height: 6vh;
  font-size: 1.24vw;
  &:hover {
    opacity: 0.5;
  }
`;
export const SocialMediaBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 15vh;
  width: 85%;
  column-gap: 1.17vw;
`;
export const SocialMedia = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
  height: 8vh;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.social_media};
  &:hover {
    opacity: 0.5;
  }
  img {
    width: 1.8vw;
  }
`;
export const SecondSectionMain = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51%;
  height: 85vh;
  padding-right: 0.75vw;
`;
export const FrapuccinoCircle = styled.figure`
  width: 26vw;
  height: 52.2vh;
  background-color: #037144;
  border-radius: 50%;
`;
export const Frapuccino = styled.img`
  position: absolute;
  width: 25vw;
`;
