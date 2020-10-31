import React from "react";
import './styles.css';
import hoverMe from '../../images/bubble1.png';
import checkingBubble from '../../images/checker.png';
import sloth from '../../images/sloth.png';

const Header = () => {
 return (
  <header>
   <h1>Sloth todo list</h1>
   <img class="img-bubble" src={hoverMe} alt="hover me" />
   <img class="img-checker hide" src={checkingBubble} id="checkingBubble" alt="Type spmething in both fields" />
   <img class="img-sloth" src={sloth} alt="sloth cartoon" />
  </header>
 )
}

export default Header;