import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import styled from "styled-components";

const SiteBorder = styled.div`
  max-width: 1000px; 
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem); 
  background: red;
  background-size: 1500px; 
  padding: 5px;  
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0 ,0, 0.5) 
  border: 5px solid white; 

  @media(max-width: 1100px){
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <SiteBorder>
      <ContentStyles>
        <Nav />
        {children}
        <Footer />
      </ContentStyles>
      </SiteBorder>
    </div>
  );
}
