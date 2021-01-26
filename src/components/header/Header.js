import React from "react";
import './styles.css';
import hoverMe from '../../images/bubble1.png';
import checkingBubble from '../../images/checker.png';
import sloth from '../../images/sloth.png';

const Header = () => {
 return (
  <header className="list-header">
   <h1 className="list-title">Sloth todo list</h1>
   <img className="img-bubble" src={hoverMe} alt="hover me" />
   <img className="img-checker hide" src={checkingBubble} id="checkingBubble" alt="Type spmething in both fields" />
   <img className="img-sloth" src={sloth} alt="sloth cartoon" data-testid="sloth-img" />
  </header>
 )
}

export default Header;