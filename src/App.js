import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
    }
    this.mouseDown = this.mouseDown.bind(this)
  }
  mouseDown = function (e) {
    e.preventDefault()
    console.log("the mouse is down!")
  }
  async componentDidMount() {
    // data:
    //   {
    //     "expr": [
    //       "a = 1.2 * (2 + 4.5)",
    //       "a / 2",
    //       "5.08 cm in inch",
    //       "sin(45 deg) ^ 2",
    //       "9 / 3 + 2i",
    //       "b = [-1, 2; 3, 1]",
    //       "det(b)"
    //     ],
    //     "precision": 14
    //   }

    console.log("the component mounts")

    let query = encodeURIComponent('sin(45 deg) ^ 2')
    let response = await axios({
      method: 'get',
      url: `http://api.mathjs.org/v4/?expr=${query}`,

    }).then(function (response) {
      console.log('the response is ', response);
    }).catch(function (error) {
      console.log(error)
    }).then(function () {
      //always executed
      console.log("alert!")
    })

    console.log('response is ', response)
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <p className="App-logo" alt="Mathematical Expression">
            <code>A + B = </code> ?
          </p>
          <input />
          <a
            className="App-link"
            href="https://api.mathjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            This project uses the Math.js API!
          </a>
        </header>
      </div>
    );
  }
}
