import React from "react";

const FormComponent = props => {
  const formData = (
    <input
      type="text"
      onChange={props.change}
      name={props.name}
      id={props.id}
    />
  );

  return (
    <div class="form-group">
      <label for={props.id}>{props.title}</label>
      {formData}
      {props.errors.map(error => (
        <small style={{ color: "red" }}>{error}</small>
      ))}
    </div>
  );
};

export default FormComponent;
