import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  getFormValues,
  reduxForm,
  Field,
  isDirty,
  InjectedFormProps
} from "redux-form";
import { Doughnut } from "react-chartjs-2";
import { FormField } from "../../_shared/form/FormField";
import Form from "../../_shared/form/Form";
import { RootState } from "../../../core/RootReducer";

const FORM_ID = "Collection";

const randomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

interface ExternalProps {
  stocks: any[];
  onSubmit: () => void;
}

type CollectionFormProps = ExternalProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapFormStateToProps> &
  Pick<InjectedFormProps, "handleSubmit">;

const CollectionForm = ({
  stocks,
  onSubmit,
  handleSubmit,
  formValues
}: CollectionFormProps) => {
  const randomColors = stocks.map(randomColor);

  const graph = {
    labels: stocks.map(({ stockId }) => stockId),
    datasets: [
      {
        data: stocks.map(({ stockId }) => formValues[stockId]),
        backgroundColor: randomColors,
        hoverBackgroundColor: randomColors
      }
    ]
  };

  return (
    <Form formId={FORM_ID}>
      <Doughnut data={graph} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {stocks.map(({ stockId }, index) => (
          <Field key={index} name={stockId} component={FormField} />
        ))}
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};

const mapStateToProps = (state: RootState, { stocks }: ExternalProps) => {
  const skim = stocks.map(stock => ({
    [stock.stockId]: Math.floor(100 / stocks.length)
  }));

  const reduced = skim.reduce((stock, acc) => ({ ...acc, ...stock }), {});
  console.log("reduced", reduced);

  return {
    initialValues: stocks.length > 0 ? reduced : {}
  };
};

const mapFormStateToProps = (state: RootState) => ({
  formValues: getFormValues(FORM_ID)(state) as Record<string, number>
});

export default compose<React.ComponentType<ExternalProps>>(
  connect(mapStateToProps),
  reduxForm({ form: FORM_ID }),
  connect(mapFormStateToProps)
)(CollectionForm);
