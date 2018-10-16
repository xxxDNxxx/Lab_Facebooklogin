import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
import logo from './logo.svg';
import 'bulma/css/bulma.css'
import './App.css';

class App extends Component {

  responseFacebook(response){
    console.log(response)
    
  }

  constructor(props){
    super(props)
    this.state = {
      name:"John Smith",
      email:"johnsmith@example.com",
      picture:"https://bulma.io/images/placeholders/96x96.png"
    }
  }

  render() {
    return (
      <div className="App">
      <FacebookLogin
      appId="314228226043981" //ได้มาจาก ไอดีของแอพใน facebookdeveloper
      autoLoad={true}
      fields="name,email,picture"
      callback={this.responseFacebook}
      />
      
      <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={this.state.picture} alt="Placeholder image"></img>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{this.state.name}</p>
        <p className="subtitle is-6">{this.state.email}</p>
      </div>
      </div>
    </div>
  </div>
  </div>
    );
  }
}

export default App;
