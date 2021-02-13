import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { EditButton, SaveButton } from "../../components/buttons";
import { connect } from "react-redux";
import { sendPasswordResetEmail } from "../../redux/actions/userActions";
import { ModalContainer } from "./settingsComponents";

const ResetPasswordModal = (props) => {
  const { email, sendPasswordResetEmail } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    handleClose();
    sendPasswordResetEmail(email);
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
            <h2 id="simple-modal-title">Reset Password</h2>
            <br />
            <p id="simple-modal-description">
              Send password reset email to {email}?
            </p>
            <br />
            <SaveButton onClick={handleClick}>Send</SaveButton>
          </ModalContainer>
        </Modal>
      ) : (
        <EditButton onClick={handleOpen}>Reset</EditButton>
      )}
    </>
  );
};

ResetPasswordModal.propTypes = {
  email: PropTypes.string.isRequired,
  sendPasswordResetEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.credentials.email,
});

const mapActionsToProps = {
  sendPasswordResetEmail,
};

export default connect(mapStateToProps, mapActionsToProps)(ResetPasswordModal);
