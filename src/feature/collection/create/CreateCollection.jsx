import React from "react";
import CollectionForm from "../shared/CollectionForm";
import { connect } from "react-redux";

const CreateCollection = ({ collection }) => (
  <CollectionForm stocks={collection} onSubmit={() => {}} />
);

const mapStateToProps = state => ({
  collection: state.collection.stocks
});

export default connect(mapStateToProps)(CreateCollection);
