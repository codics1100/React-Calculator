import React, { Component } from 'react';

class KeyPadComponent extends Component {

  render() {
    return (
      <div className="button">
                <button name="(" id="braket1" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)} id="clear">CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)} id="braket2">)</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)} id="clearAll">C</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)} id="btn1">1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)} id="btn2">2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)} id="btn3">3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)} id="btnplus">+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)} id="btn4">4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)} id="btn5">5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)} id="btn6">6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)} id="btnsub">-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)} id="btn7">7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)} id="btn8">8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)} id="btn9">9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)} id="btnmul">x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)} id="btndeci">.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)} id="btn0">0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)} id="btnEqual">=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)} id="btndiv">÷</button><br/>
            </div>
    );
  }
}


export default KeyPadComponent;