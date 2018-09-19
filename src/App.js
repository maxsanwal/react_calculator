import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <Casio />
    );
  }
}

class Casio extends Component{
  constructor(props){
    super(props);
    this.state={
      value: 0,
    }
  }

  handleClick(i){
    if(this.state.value!=0){
      let num = this.state.value;
      let newValue= ""+ num + i;
      this.setState({value:newValue});
    }
    else{
      let newValue= i;
      this.setState({value:newValue});
    }
  }

  handleDel(){
    let num = this.state.value;
    let size = num.length;
    if(this.state.value!=0){
      if(size==1){
        this.setState({value:0});
      }
      else{
        let newNum = num+"";
        let newValue = newNum.slice(0, size-1);
        this.setState({value:newValue,});
      }
    }
  }

  handleEqual(exp){
    let ans = eval(exp);
    this.setState({value: ans});
  }

  renderButton(i){
    return<NumButton value={i} onClick={() => this.handleClick(i)}/>
  }
  render(){
    return (
      <div className="fullCalci">
      <h1>Use mouse<img src={require("./rat.png")} className="mouse"/></h1>
        <div className="textArea">
          <Box value={this.state.value}/>
        </div>
        <div className="buttonSet">
          <div className="row">
            {this.renderButton(9)}
            {this.renderButton(8)}
            {this.renderButton(7)}
            {this.renderButton('+')}
          </div>
          <div className="row">
            {this.renderButton(6)}
            {this.renderButton(5)}
            {this.renderButton(4)}
            {this.renderButton('-')}
          </div>
          <div className="row">
            {this.renderButton(3)}
            {this.renderButton(2)}
            {this.renderButton(1)}
            {this.renderButton('*')}
          </div>
          <div className="row">
            {this.renderButton(0)}
            <Del value="del" onClick={()=>this.handleDel()}/>
            {this.renderButton('/')}
            <Equal value="=" onClick={()=>this.handleEqual(this.state.value)}/>
          </div>
        </div>
      </div>
    );
  }
}

class Box extends Component{
  render(){
    return(
      <div class="textbox">
        {this.props.value}
      </div>
    );
  }
}

class NumButton extends Component{
  render(){
    return(
      <button className="numbers" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Del extends Component{
  render(){
    return(
      <button className="numbers" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Equal extends Component{
  render(){
    return(
      <button className="numbers" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

export default App;