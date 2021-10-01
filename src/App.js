import './App.css';
import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      a: null,
      operation: '',
      b: null,
      expression: '',
      userInput: '',
      responseData: [],
    }
    this.maintainHistory = this.maintainHistory.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.generateMathProblem = this.generateMathProblem.bind(this)
  }
  generateMathProblem() {
    let a = Math.floor(Math.random() * 101)
    let operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]
    let b = Math.floor(Math.random() * 101)
    let expression = `${a} ${operation} ${b}`
    this.setState({
      a, operation, b, expression
    })
    this.maintainHistory(`${expression} = ?`)
  }
  componentDidMount() {
    try {
      this.generateMathProblem()
    } catch (err) {
      console.log(err)
    }
  }
  maintainHistory = function (data) {
    try {
      this.setState({
        responseData: [...this.state.responseData, data]
      })
    } catch (err) {
      console.log(err)
    }
  }
  async onSubmit(e) {
    try {
      e.preventDefault()
      let value = e.target.elements.submittedAnswer.value
      const { maintainHistory, generateMathProblem } = this;
      maintainHistory(value)
      let expression = encodeURIComponent(this.state.expression)

      swal({
        title: `Your answer is ${value}.`,
        text: `Do you want to submit the value ${value}?`,
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async (submitAnswer) => {
        if (submitAnswer) {
          await axios({
            method: 'get',
            url: `http://api.mathjs.org/v4/?expr=${expression}`,
          }).then(function (response) {
            // eslint-disable-next-line
            if (value == response.data) {
              swal(`Thank you for submitting such a correct query and query format.  The response is ${response.data}`)
              generateMathProblem()
            } else {
              swal(`The server has spoken, you didn't submit the correct response!`)
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          swal("Excellent!  Try a more complete and fun answer which matches one of the displayed options.")
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div className='titleText'>Addition Practice</div>
          <div style={{ textAlign: 'left', display: 'flex', width: '90vw', justifyContent: 'space-between' }}>
            <div>
              <b>A list of example expressions is,</b>
              <br />
              a = 1.2 * (2 + 4.5),
              <br />
              a / 2,
              <br />
              5.08 cm in inch,
              <br />
              sin(45 deg) ^ 2,
              <br />
              9 / 3 + 2i,
              <br />
              b = [-1, 2; 3, 1],
              <br />
              det(b)
            </div><div
              style={{ display: 'flex', flexDirection: 'column' }}
            >Previous Response Values!
              {this.state.responseData.map(e => <div>{e}</div>)}</div>
          </div>
          <p className="App-logo" alt="Mathematical Expression">
            <code>{this.state.expression} = ?</code>
          </p>
          <Form style={{ position: 'absolute' }} onSubmit={this.onSubmit}>
            <Form.Group role="form" controlId="form.ControlTextArea"
            >
              <div style={{ display: 'flex' }}
                id='formFlexBox'
              >
                <Form.Control as="textarea"
                  className='appClassName'
                  name='submittedAnswer'
                  placeholder='Give the API a value!  The soon-to-be value will be much appreciated!' rows={3} style={{ width: '50vw' }} />

                <Button className='submitButton' variant="primary" type="submit">
                  Submit Answer
                </Button>
              </div>
            </Form.Group>
          </Form>

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
