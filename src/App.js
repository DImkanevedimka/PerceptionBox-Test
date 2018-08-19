import React, { Component } from "react";
import { Header, Form, Footer, Popup } from "./components";
import "./styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      popupActive: false
    };
  }

  submitForm = (e, value) => {
    e.preventDefault();
    console.log(value);
    this.setState({ Username: value, popupActive: !this.state.popupActive });
  };

  closePopup = (e) => {
    if( e.target == e.currentTarget || e.target.matches('span')) {
      this.setState({popupActive: !this.state.popupActive });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Form submit={this.submitForm} />
        </main>
        <Footer />
        <Popup name={this.state.Username} closePopup={this.closePopup} isOpen={this.state.popupActive}/>
      </div>
    );
  }
}

export default App;
