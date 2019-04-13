import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { getFormValues, reduxForm, Field, isDirty } from "redux-form";
import { Doughnut } from "react-chartjs-2";
import { FormField } from "../../_shared/FormField";
import { DirtyFormCheck } from "../../_shared/DirtyFormCheck";

const FORM_ID = "Collection";

const randomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const CollectionForm = ({
  stocks,
  onSubmit,
  handleSubmit,
  formValues,
  dirty
}) => {
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
    <>
      <DirtyFormCheck when={dirty} />
      <Doughnut data={graph} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {stocks.map(({ stockId }, index) => (
          <Field key={index} name={stockId} component={FormField} />
        ))}
        <Button type="submit">Save</Button>
      </form>
    </>
  );
};

const mapStateToProps = (state, { stocks }) => {
  const skim = stocks.map(stock => ({
    [stock.stockId]: parseInt(100 / stocks.length)
  }));

  const reduced = skim.reduce((stock, acc) => ({ ...acc, ...stock }), {});
  console.log("reduced", reduced);

  return {
    initialValues: stocks.length > 0 ? reduced : {}
  };
};

const mapFormStateToProps = state => ({
  formValues: getFormValues(FORM_ID)(state),
  dirty: isDirty(FORM_ID)(state)
});

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: FORM_ID }),
  connect(mapFormStateToProps)
)(CollectionForm);
