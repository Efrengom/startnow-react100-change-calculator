import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    }
    this.handleInputChange = this.handleInputChange.bind(this) 
    this.calculate = this.calculate.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const value = e.target.value
    const name = target.name

    this.setState({
      [name]: value
    });
  }

  calculate() {
    let amountReceived = this.state.amountReceived;
    let amountDue = this.state.amountDue;
    let changeDue = amountReceived - amountDue;
    let totalChange = amountReceived - amountDue;
   
    let  twenties = Math.trunc(totalChange / 20);
    totalChange -= (twenties * 20);
   
    let tens = Math.trunc(totalChange / 10);
    totalChange -= (tens * 10);
  
    let fives = Math.trunc(totalChange / 5);
    totalChange -= (fives * 5);
   
    let ones = Math.trunc(totalChange);
    totalChange -= ones;
  
    let quarters = Math.trunc(totalChange / .25);
    totalChange -= (quarters * .25);
  
    let dimes = Math.trunc(totalChange / .10);
    totalChange -= (dimes * .10);
  
    let nickels = Math.trunc(totalChange / .05);
    totalChange -= (nickels * .05);
   
    let pennies = (Math.round((totalChange + 0.00001) * 100) / 100) * 100;
    this.setState({
      changeDue: changeDue,
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
    });
  }

  render() {return(
    <div>
    <div className="form-group" className="col-md-4">
        <label>Enter information</label>
      <div className="amount-due">
        <label>How much is due?</label>
        <input type="number" className="form-control"  name = 'amountDue' value ={this.state.amountDue} onChange={this.handleInputChange}/>
      </div>
      <div className="amount-received">
        <label>How much was recived?</label>
        <input type="number" className="form-control"  name='amountReceived' value ={this.state.amountReceived} onChange={this.handleInputChange}/>
      </div> 
      <button className="btn" onClick={this.calculate}>Calculate</button>
    </div>
    <div className="form-group" className="col-md-8">
    <div className="alert alert-success" role="alert">The total change due is ${this.state.changeDue}</div>
      <div className='changeDue'></div>
        <div className="row">
          <div  className = 'change'> {this.state.twenties}</div>
          <div  className='change'>{this.state.tens}</div>
          <div className="change" > {this.state.fives}</div>
          <div className="change" >{this.state.ones}</div>
        </div>
        <div className="row">
          <div className="change"> {this.state.quarters}</div>
          <div className="change"> {this.state.dimes}</div>
          <div className="change" > {this.state.nickels}</div>
          <div className="change" > {this.state.pennies}</div>
        </div>
    </div>
    </div>
    )
  }
}

export default App;
