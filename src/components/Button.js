import React, { Component } from "react";
import ButtonStyled from "./ButtonStyled";

class Button extends Component {
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return( 
      <ButtonStyled>
      <div 
        className={`button ${this.isOperator(this.props.children) ? "" : "operator"}`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
      </ButtonStyled>
    )
  }
}

export default Button;
