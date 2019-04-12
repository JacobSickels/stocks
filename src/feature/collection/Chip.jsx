import React from "react";
import { removeFromCollection } from "../../core/collection/actions";
import { connect } from "react-redux";
import { Label, Icon } from "semantic-ui-react";

const Chip = ({ stock, removeFromCollection }) => {
  const remove = () => removeFromCollection(stock.stockId);

  console.log("inchip", stock);
  return (
    <Label color="blue" onClick={remove}>
      {stock.stockId}
      <Icon name="delete" />
    </Label>
  );
};

const mapDispatchToProps = { removeFromCollection };

export default connect(
  undefined,
  mapDispatchToProps
)(Chip);
