import React from "react";
import { Input } from "semantic-ui-react";

export const FormField = ({ input: { value, onChange } }) => {
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
