import React, { Component } from "react";
import FormComponent from "../layouts/FormComponent";
import validator from "../utils/validator";

export class UserForm extends Component {
  state = {
    form: {
      email: {
        value: "",
        name: "email",
        id: "email",
        touched: false,
        errors: [],
        validations: {
          required: true,
          regex: /\w@(\w\.)+\w/
        }
      },
      pwd: {
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

  render() {
    return (
      <div>
        <form>
          {Object.values(this.state.form).map(input => (
            <div>
              <FormComponent
                change={this.handleInput}
                name={input.name}
                id={input.id}
                errors={input.errors}
                touched={input.touched}
              />
            </div>
          ))}
          <button>Submeter</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
