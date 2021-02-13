import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { DeleteButton } from "../../components/buttons";
import { connect } from "react-redux";
import { deleteAccount } from "../../redux/actions/userActions";
import { ModalContainer } from "./settingsComponents";

const DeleteAccountModal = (props) => {
  const { deleteAccount } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalContainer>
            <h2 id="simple-modal-title">
              Are you sure you want to delete your account?
            </h2>
            <br />
            <p id="simple-modal-description">
              This deletes all your Moonio account data including transactions
              and trade history. This action is irreversible.
            </p>
            <br />
            <DeleteButton onClick={deleteAccount}>Delete</DeleteButton>
          </ModalContainer>
        </Modal>
      ) : (
        <DeleteButton onClick={handleOpen}>Delete</DeleteButton>
      )}
    </>
  );
};

DeleteAccountModal.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapActionsToProps = {
  deleteAccount,
};

export default connect(mapStateToProps, mapActionsToProps)(DeleteAccountModal);
