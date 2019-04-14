import React from "react";
import { Input } from "semantic-ui-react";
import { WrappedFieldProps } from "redux-form";

export const FormField = ({
  input: { value, onChange }
}: WrappedFieldProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      label={{ basic: true, content: "%" }}
      labelPosition="right"
      placeholder="100"
    />
  );
};
