import React from "react";

function Buttons(props) {
    return (
      <div>
        <div className="flex mb-4">
          <button id="clear" onClick={props.handleClear}>
            AC
          </button>
          <button id="divide" onClick={props.handleClick}>
            /
          </button>
          <button id="multiply" onClick={props.handleClick}>
            *
          </button>
        </div>
        <div className="flex mb-4">
          <button id="seven" onClick={props.handleClick}>
            7
          </button>
          <button id="eight" onClick={props.handleClick}>
            8
          </button>
          <button id="nine" onClick={props.handleClick}>
            9
          </button>
          <button id="subtract" onClick={props.handleClick}>
            -
          </button>
        </div>
        <div className="flex mb-4">
          <button id="four" onClick={props.handleClick}>
            4
          </button>
          <button id="five" onClick={props.handleClick}>
            5
          </button>
          <button id="six" onClick={props.handleClick}>
            6
          </button>
          <button id="add" onClick={props.handleClick}>
            +
          </button>
        </div>
        <div className="flex">
          <button id="one" onClick={props.handleClick}>
            1
          </button>
          <button id="two" onClick={props.handleClick}>
            2
          </button>
          <button id="three" onClick={props.handleClick}>
            3
          </button>
        </div>
        <div>
          <button id="zero" onClick={props.handleClick}>
            0
          </button>
          <button id="decimal" onClick={props.handleClick}>
            .
          </button>
        </div>
        <button id="equals" onClick={props.handleClick}>
          =
        </button>
      </div>
    );
  }

  export default Buttons;