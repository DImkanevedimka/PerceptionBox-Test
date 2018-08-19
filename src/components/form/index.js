import React, { Component } from "react";
import { Input } from './input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      formErrors: { Username: "", Password: "" },
      UsernameValid: false,
      PasswordValid: false,
      formValid: false,
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let UsernameValid = this.state.UsernameValid;
    let PasswordValid = this.state.PasswordValid;

    switch (fieldName) {
      case "Username":
        UsernameValid = !value.toLowerCase().match(/[а-я\n@().^+@!]/) && value.length > 0;
        fieldValidationErrors.Username = UsernameValid ? "" : "Только латиница и цифры";
        break;
      case "Password":
        PasswordValid = value.length >= 6;
        fieldValidationErrors.Password = PasswordValid
          ? ""
          : "Не меньше 6 символов";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        UsernameValid: UsernameValid,
        PasswordValid: PasswordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    let validForm = this.state.UsernameValid && this.state.PasswordValid;
    console.log(validForm);
    this.setState({
      formValid: validForm
    });
  };

  render() {
    return (
      <form action="#" onSubmit = {(e) => this.props.submit(e, this.state.Username)}>
        <div>
          <Input name={'Username'} type={'text'} value={this.state.Username} onChange={this.handleUserInput} error={this.state.formErrors.Username}/>
          <Input name={'Password'} type={'Password'} value={this.state.Password} onChange={this.handleUserInput} error={this.state.formErrors.Password} />
        </div>
        <div>
          <button type="submit" disabled={!this.state.formValid}>
            Отправить
          </button>
          <a href="#pass">Forgot Password?</a>
        </div>
      </form>
    );
  }
}

export { Form };
