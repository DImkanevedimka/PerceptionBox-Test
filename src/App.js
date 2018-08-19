import React, { Component } from 'react';
import {
  Header,
  Form,
  Footer,
  Popup,
} from './components';
import './styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      popupActive: false,
    };
  }

  submitForm = (e, value) => {
    e.preventDefault();

    this.setState(prevState => ({ Username: value, popupActive: !prevState.popupActive }));
  };

  closePopup = (e) => {
    if (e.target === e.currentTarget || e.target.matches('span')) {
      this.setState(prevState => ({ popupActive: !prevState.popupActive }));
    }
  }

  render() {
    const { Username, popupActive } = this.state;
    return (
      <div>
        <Header />
        <main>
          <Form submit={this.submitForm} />
        </main>
        <Footer />
        <Popup name={Username} closePopup={this.closePopup} isOpen={popupActive} />
      </div>
    );
  }
}

export { App };
