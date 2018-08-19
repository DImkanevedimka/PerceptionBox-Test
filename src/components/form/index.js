import React, { Component } from 'react';
import { Input } from './input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      formErrors: { Username: '', Password: '' },
      UsernameValid: false,
      PasswordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let { UsernameValid, PasswordValid } = this.state;
    const { formErrors } = this.state;
    const fieldValidationErrors = formErrors;

    switch (fieldName) {
      case 'Username':
        UsernameValid = !value.toLowerCase().match(/[а-я\n@().^+@!]/) && value.length > 0;
        fieldValidationErrors.Username = UsernameValid ? '' : 'Только латиница и цифры';
        break;
      case 'Password':
        PasswordValid = value.length >= 6;
        fieldValidationErrors.Password = PasswordValid
          ? ''
          : 'Не меньше 6 символов';
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        UsernameValid,
        PasswordValid,
      },
      this.validateForm,
    );
  }

  validateForm() {
    const { UsernameValid, PasswordValid } = this.state;
    const validForm = UsernameValid && PasswordValid;
    this.setState({
      formValid: validForm,
    });
  }

  render() {
    const { submit } = this.props;
    const {
      Username,
      Password,
      formErrors,
      formValid,
    } = this.state;
    return (
      <form action="#" onSubmit={e => submit(e, Username)}>
        <div>
          <Input name="Username" type="text" value={Username} onChange={this.handleUserInput} error={formErrors.Username} />
          <Input name="Password" type="password" value={Password} onChange={this.handleUserInput} error={formErrors.Password} />
        </div>
        <div>
          <button type="submit" disabled={!formValid}>
            Отправить
          </button>
          <a href="#pass">Forgot Password?</a>
        </div>
      </form>
    );
  }
}

export { Form };
