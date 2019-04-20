import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import { RootState } from "../../core/RootReducer";
import { removeSnackbar } from "../../core/network/actions";

type SnacksProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const Snacks = (props: SnacksProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [displayed, setDisplayed] = useState<any>([]);

  React.useEffect(() => {
    console.log("updated");
    const { snacks } = props;

    snacks.forEach(snack => {
      if (displayed.includes(snack.key)) return;
      enqueueSnackbar(snack.message, snack.options);
      setDisplayed([...displayed, snack.key]);
      props.removeSnackbar(snack.key);
    });
  }, [props.snacks]);

  return <></>;
};

const mapStateToProps = (state: RootState) => ({
  snacks: state.network.snacks
});

const mapDispatchToProps = { removeSnackbar };

const shouldNotUpdate = (oldProps: SnacksProps, newProps: SnacksProps) => {
  console.log(oldProps, newProps);
  let exists = true;
  for (let newSnack of newProps.snacks) {
    if (!exists) continue;

    const found = !!oldProps.snacks.find(oldSnack => {
      return oldSnack.key === newSnack.key;
    });

    if (!found) {
      exists = false;
    }
  }

  return exists;
};

const ShouldUpdateSnacks = React.memo(Snacks, shouldNotUpdate);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShouldUpdateSnacks);
