import React from "react";
import { removeFromCollection } from "../../core/collection/actions";
import { connect } from "react-redux";
import { Label, Icon } from "semantic-ui-react";

interface ExternalProps {
  stock: any;
}

type ChipProps = ExternalProps & typeof mapDispatchToProps;

const Chip = ({ stock, removeFromCollection }: ChipProps) => {
  const remove = () => removeFromCollection(stock.stockId);
  console.log("abc123", stock);
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
