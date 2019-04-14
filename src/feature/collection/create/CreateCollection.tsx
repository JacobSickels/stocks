import React from "react";
import CollectionForm from "../shared/CollectionForm";
import { connect } from "react-redux";
import { RootState } from "../../../core/RootReducer";

type CreateCollectionProps = ReturnType<typeof mapStateToProps>;

const CreateCollection = ({ collection }: CreateCollectionProps) => (
  <CollectionForm stocks={collection} onSubmit={() => {}} />
);

const mapStateToProps = (state: RootState) => ({
  collection: state.collection.stocks
});

export default connect(mapStateToProps)(CreateCollection);
