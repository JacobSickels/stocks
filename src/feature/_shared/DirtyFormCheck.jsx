import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import { Modal, Button, Icon, Header } from "semantic-ui-react";
import { history } from "../App";

export const DirtyFormCheck = ({ when }) => {
  const [confirmedNavigation, setConfirmNavigation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState();

  useEffect(() => {
    if (confirmedNavigation) {
      history.push(location);
    }
  }, [confirmedNavigation]);

  const closeModal = () => setShowModal(false);
  const blockNavigation = location => {
    if (!confirmedNavigation) {
      setShowModal(true);
      setLocation(location);
      return false;
    }

    return true;
  };

  const handleConfirm = () => {
    setConfirmNavigation(true);
    setShowModal(false);
  };

  return (
    <>
      <Prompt when={when} message={blockNavigation} />
      <Modal open={showModal} basic size="small">
        <Header icon="warning sign" content="Unsaved Changes" />
        <Modal.Content>
          <p>
            You have unsaved changes in this form, and if you leave they will
            not be saved. Would you like to continue?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={closeModal}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted onClick={handleConfirm}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};
