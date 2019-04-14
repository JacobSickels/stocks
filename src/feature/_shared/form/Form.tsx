import * as React from "react";
import { isDirty } from "redux-form";
import { DirtyFormCheck } from "./DirtyFormCheck";
import { RootState } from "../../../core/RootReducer";
import { connect } from "react-redux";

interface ExternalProps {
  formId: string;
}

type FormProps = ExternalProps & ReturnType<typeof mapStateToProps>;

const Form: React.FunctionComponent<FormProps> = ({ dirty, children }) => {
  return (
    <>
      <DirtyFormCheck when={dirty} />
      {children}
    </>
  );
};

const mapStateToProps = (state: RootState, { formId }: ExternalProps) => ({
  dirty: isDirty(formId)(state)
});

export default connect(mapStateToProps)(Form);
