import { useState } from "react";
import "./App.css";
import { Row, Col, Button, Form } from "react-bootstrap";
const a = [
  {value:"AC", isOp:true},
 {value:"%", isOp:true},{value:"bk", isOp:true},{value:"/", isOp:true},{value:"7", isOp:false},{value:"8", isOp:false},{value:"9", isOp:false},{value:"*", isOp:true},{value:"4", isOp:false},{value:"5", isOp:false},{value:"6", isOp:false},{value:"-", isOp:true},{value:"1", isOp:false}, {value:"2", isOp:false}, {value:"3", isOp:false}, {value:"+", isOp:true}, {value:"0", isOp:false},, {value:"00", isOp:false},, {value:".", isOp:false},, {value:"=", isOp:true},
];

function App() {
  const [input, setInput] = useState("");

  const display = (value) => {
    setInput(`${input}${value}`);
  };

  const calc = () => {
    setInput(eval(input));
  };

  const clearAll = () => {
    setInput("");
  };

  const removelast = () => {
    setInput(input.slice(0, -1));
  };
  const onclick = (value) => {
//     if (value === "=") calc();
    
//     else display(value);
 switch(value){
        case '=' : calc();
         break;
        case 'AC' : clearAll();
         break;
        case 'bk' : removelast();
         break;
        default: display(value)
 }
 
  };

//   ---------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
        <h3 className="text-center text-primary lg-5 mb-5">CALCULATOR</h3>
        <div
          style={{ backgroundColor: "white", width: "22rem" }}
          className="container d-flex flex-column align-items-center card shadow rounded"
        >
          <div className="w-100 p-2 d-flex align-items-center">
            <Row>
            <input
                  placeholder="0"
                  id="result"
                  type="text"
                  className="form-control"
                  readonly
                  value={input}
                ></input>
                <div className="bbb d-flex align-items-center justify-content-center">
                  {a.map((b) => (
                    <Button  variant={b.isOp ? 'primary' :'dark'}  onClick={(e) => onclick(b.value)}>
                      {b.value==='bk'?<i className="fa-solid  fa-caret-left"></i>:b.value}
                    </Button>
                  ))}
                </div>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
