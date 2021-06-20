import { createGlobalStyle } from "styled-components";
import { setFont, letterSpacing, sizes, setColor } from "./helper";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500;600&family=Playfair+Display:wght@600;700&display=swap');

*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

html{
  font-size: 62.5%;
}

body{

}

h1,h2,h3,h4,h5{
  ${setFont.main};
text-align: center;
 text-transform: uppercase;
 letter-spacing: ${letterSpacing(2)};
 color:${setColor.maindDark};
}

h1{
  font-size: 4.8rem;
 line-height:1;
}

h2{
  font-size: 4rem;
 line-height:1;
}

h3{
  font-size: 3.2rem;
 line-height:1.2;
}

h4{
  font-size: 2.4rem;
 line-height:1.5;
  margin-bottom: .8rem;
}

h5{
  font-size: 1.6rem;
 line-height:1.5;
  margin-bottom: .8rem;
}



p{
  line-height: 1.5;
  font-size: 1.6rem;
  letter-spacing: ${letterSpacing(1)};
  margin-bottom: .8rem;
  ${setFont.main};
}

a{
  text-decoration: none;
  ${setFont.main};

}

ul,li{
  list-style: none;
}

img{
  width: 100%;
  display: block;
  object-fit: cover;
}



@media (max-width: ${sizes.m}){

  h1{
    font-size:4rem;
  }
 h2{
  font-size:3.2rem;
 }
 h3{
  font-size:2.4rem;
 }
 h4{
  font-size:1.6rem;
 }
 h5{
  font-size:1.6rem;
 }
}


`;

export default Global;
