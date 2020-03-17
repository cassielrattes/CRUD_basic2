import React, { Component } from "react";
import FormComponent from "../layouts/FormComponent";
import validator from "../utils/validator";
import axios from "axios";

export class UserForm extends Component {
  state = {
    form: {
      email: {
        type: "text",
        value: "",
        name: "email",
        id: "email",
        touched: false,
        errors: [],
        validations: {
          required: true,
          regex: /\w@\w/
        }
      },
      pwd: {
        type: "password",
        value: "",
        touched: false,
        name: "pwd",
        id: "pwd",
        errors: [],
        validations: {
          required: true
        }
      },
      formState: false
    }
  };

  validateForm = () => {
    let formValid = true;
    for (let input in this.state.form) {
      formValid = formValid && !this.state.form[input].errors;
    }
    return formValid;
  };

  handleInput = event => {
    const { name, value } = event.target;
    const form = this.state.form;
    const input = form[name];
    input.touched = true;
    input.value = value;
    input.errors = validator(value, form[name].validations);
    form.formState = this.validateForm();
    this.setState({ form });
  };

  submitForm = async event => {
    const { email, pwd } = event.target;
    const form = this.state.form;
    const data = {
      email: form[email].value,
      pwd: form[pwd].value
    };
    await axios.post("http://localhost:38001/users/session", data);
    alert("foi");
  };

  render() {
    return (
      <div>
        <form>
          {Object.keys(this.state.form).map(key => {
            const input = this.state.form[key];
            return (
              <FormComponent
                change={this.handleInput}
                name={input.name}
                id={input.id}
                type={input.type}
                errors={input.errors}
                touched={input.touched}
              />
            );
          })}
          <button onSubmit={this.submitForm}>Submeter</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
