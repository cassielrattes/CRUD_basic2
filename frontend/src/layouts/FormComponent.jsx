import React from "react";

const FormComponent = props => {
  const formData = (
    <input
      className="form-control"
      type="text"
      onChange={props.change}
      name={props.name}
      id={props.id}
    />
  );
  const errors = props.errors.map(error => (
    <small style={{ color: "red" }}>{error}</small>
  ));

  return (
    <div class="form-group">
      <label for={props.id}>{props.title}</label>
      {formData}
      {errors}
    </div>
  );
};

export default FormComponent;
