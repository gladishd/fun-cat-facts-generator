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
      funFact: '',
      userInput: '',
      responseData: [],
    }
    this.maintainHistory = this.maintainHistory.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.generateFunFact = this.generateFunFact.bind(this)
  }
  generateFunFact(fact) {
    this.maintainHistory(fact)
    this.setState({
      funFact: fact
    })
  }
  componentDidMount() {
    try {
      this.generateFunFact()
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
      let value = parseInt(e.target.elements.howMany.value)
      const { maintainHistory, generateFunFact } = this;
      maintainHistory(`${value} fun facts coming up!`)


      swal({
        title: `Welcome to Fun Facts.`,
        text: `Do you want to proceed?`,
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async (submitAnswer) => {
        if (submitAnswer) {
          for (let i = 0; i < value; i++) {
            await axios({
              method: 'get',
              url: `https://catfact.ninja/fact`,
            }).then(function (response) {
              swal(`${response.data.fact}`)
              generateFunFact(response.data.fact)
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          swal("Excellent!  Come again another time.")
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
          <div className='titleText'>Request Your Own...</div>
          <div style={{ textAlign: 'left', display: 'flex', width: '90vw', justifyContent: 'space-between' }}>
            <div>
              <b>Welcome to the Fun Facts page,</b>
              <br />
              where you can order anything you want to know.
              <br />
              Get random cat facts via text message every day if you want,
              <br />
              via https://catfact.ninja/.
            </div><div
              style={{ display: 'flex', flexDirection: 'column' }}
            >Fun Facts!
              {this.state.responseData.map(e => <div>{e}</div>)}</div>
          </div>
          <p className="App-logo" alt="Mathematical funFact">
            <code>{this.state.funFact}</code>
          </p>
          <Form style={{ position: 'absolute' }} onSubmit={this.onSubmit}>
            <Form.Group role="form" controlId="form.ControlTextArea"
            >
              <div style={{ display: 'flex' }}
                id='formFlexBox'
              >
                <Form.Control type="number"
                  className='appClassName'
                  name='howMany'
                  placeholder='how many?!' rows={3} style={{ width: '200px', fontSize: '1em' }} />

                <Button className='submitButton' variant="primary" type="submit">
                  Request Fun Fact
                </Button>
              </div>
            </Form.Group>
          </Form>
          -Dean Gladish
          <a
            className="App-link"
            href="https://catfact.ninja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            This project uses the Cat Facts API!
          </a>
        </header>
      </div>
    );
  }
}
