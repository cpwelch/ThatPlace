import { createGlobalStyle } from "styled-components";
import logo from "../img/cafe.jpeg";
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    overflow-x: hidden;
    @media (max-width: 1200px){
        font-size: 80%;
    }
    
}

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(to bottom, rgba(250, 250,250,0.875), rgba(250,250,250,0.875)), url(${logo});
    background-size: cover;
    background-position: center;


}

button {
    font-weight: medium;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background-color: #F2D388;
    border: 3px solid #F2D388;
    color: black;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);

}
h2 {
        font-weight: lighter;
        font-size: 4rem;
        color: #1a1710;
    }

h3 {
    color: #1a1710;
}
h4{
    font-weight: bold;
    font-size: 2rem;
    color: #1a1710;
    
}
span{
    font-weight: bold;
    color: #A7D2CB
}
a {
    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;

}

p {
    padding: 2rem 0rem;
    color: black;
    font-size: 1rem;
    line-height: 150%;
}


`;

export default GlobalStyle;
