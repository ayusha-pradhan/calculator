import React,{Component} from 'react';
import CalculatorStyled from './CalculatorWrapper';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

   clearInput = () => {
    this.setState({ input: "" });
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ 
      input: "", 
      operator : "plus" 
    });   
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ 
      input: "", 
      operator : "subtract" 
    });   
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ 
      input: "", 
      operator : "multiply" 
    });   
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ 
      input: "", 
      operator : "divide" 
    });   
  };
  total = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)
      });
    }
    else if (this.state.operator === "subtract") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber)
      });
    }
    else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber)
      });
    }
    else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber)
      });
    }
  }
  render(){
  return (
    <CalculatorStyled>
          <Input>{this.state.input}</Input>
          
          <Button  handleClick={this.addToInput}>7</Button>
          <Button  handleClick={this.addToInput}>8</Button>
          <Button  handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.divide}>/</Button>
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.add}>+</Button>
          <Button handleClick={this.addDecimal}>.</Button>
          <Button  handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.total}>=</Button>
          <Button handleClick={this.subtract}>-</Button>  
          <ClearButton handleClear={this.clearInput}>Clear</ClearButton>    
    </CalculatorStyled>
  );
}}

export default App;
