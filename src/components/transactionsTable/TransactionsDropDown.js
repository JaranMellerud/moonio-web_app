// React
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { deleteTransaction } from "../../redux/actions/dataActions";
// Material UI
import IconButton from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// Material UI Icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// Proptypes
import PropTypes from "prop-types";

const TransactionsDropDown = (props) => {
  const { transaction, deleteTransaction } = props;
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const closeDropDown = () => {
    setAnchorEl(null);
  };

  const handleDropDownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditClick = () => {
    closeDropDown();
    history.push({
      pathname: `/edit_transaction/${transaction.id}`,
      state: {
        transaction: transaction,
      },
    });
  };

  const handleDeleteClick = () => {
    closeDropDown();
    deleteTransaction(transaction.id, "transactionsPage");
  };

  return (
    <>
      <IconButton
        onClick={handleDropDownClick}
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeDropDown}
      >
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </Menu>
    </>
  );
};

TransactionsDropDown.propTypes = {
  deleteTransaction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapActionsToProps = {
  deleteTransaction,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TransactionsDropDown);
