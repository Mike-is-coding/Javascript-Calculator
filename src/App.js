import React from 'react';
import { create, all } from 'mathjs';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      formulaResult: "",
      result: [],
      number: [],
      operator: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  calculateOperations = () => {
    let result = this.state.result.join("");
    if (result) {
      console.log(result);
      console.log(this.state.result);
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      console.log(result);
      this.setState((prevState) => ({
        result: [result],
        formulaResult: prevState.formulaResult + "=" + result,
        display: result
      }));
    }
  };

  //On Button Click Handler
  handleClick(e) {
    let regex = /[/\+\-\=\*\.]/g;
    const value = e.target.innerText;
    // console.log(value, "first");

    switch (value) {
      case "=":
        this.calculateOperations();
        break;
      case "-":
        if (this.state.result.length === 0) {
          this.state.result.push(value);
          console.log(this.state.result);
        } else if (this.state.operator.length <= 2) {
          this.setState(
            (prevState) => ({
              operator: this.state.operator.concat(value),
              number: []
            }),
            () => {
              let arr = this.state.operator;
              this.setState((prevState) => ({
                display: prevState.display + arr
              }));
            }
          );
        }
        this.setState({
          display: this.state.result.join(""),
          formulaResult: this.state.result.join("")
        });
        break;
      case "/":
        let display = this.state.display;
        this.setState((prevState) => ({
          number: [],
          operator: value,
          display: display + value
        }));
        console.log(this.state.operator);
        break;
      case "*":
        this.setState((prevState) => ({
          number: [],
          operator: value,
          display: prevState.display + value
        }));
        console.log(this.state.operator);
        break;
      case "+":
        this.setState((prevState) => ({
          number: [],
          operator: value,
          display: prevState.display + value
        }));
        console.log(this.state.operator);
        break;
      default:
        //Handle Number Separation and Negatives
        if (!regex.test(value) || value === ".") {
          this.state.result.push(this.state.operator);
          this.setState((prevState) => ({
            operator: []
          }));
          if (value === "." && this.state.number.join("").indexOf(".") < 0) {
            this.state.number.push(value);
            this.state.result.push(value);
            this.setState({
              display: this.state.result.join(""),
              formulaResult: this.state.result.join("")
            });
          } else if (value !== ".") {
            if (value !== "0") {
              this.state.number.push(value);
              this.state.result.push(value);
              this.setState({
                display: this.state.result.join(""),
                formulaResult: this.state.result.join("")
              });
            } else if (value === "0" && this.state.number.length !== 0) {
              this.state.number.push(value);
              this.state.result.push(value);
              this.setState({
                display: this.state.result.join(""),
                formulaResult: this.state.result.join("")
              });
            } else {
              this.setState({ display: "0" });
            }
          }
          // console.log(this.state.number);
          // console.log(this.state.result);
        }

        console.log(this.state.result);
        break;
    }
  }

  //Clear display
  handleClear() {
    this.setState((prevState) => ({
      display: "0",
      formulaResult: "",
      result: [],
      number: [],
      operator: []
    }));
  }

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="calc-base">
            <div className="formulaScreen">{this.state.formulaResult}</div>
            <div id="display" className="display">
              {this.state.display}
            </div>
            <div className="button-pad">
              <Buttons
                handleClear={this.handleClear}
                handleClick={this.handleClick}
                handleEquals={this.handleEquals}
              />
            </div>
          </div>
          <div id="tag">
            <p>
              Designed and Coded by{" "}
              <a
                className="Link"
                href="https://www.freecodecamp.org/Mike_is_coding"
                target="_blank" rel="noreferrer"
              >
                Miguel Fierro
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
