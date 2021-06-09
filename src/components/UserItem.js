import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { connect } from "react-redux";
import { deleteUserAction } from "../actions/userActions";
import "./form.css";

//this component represents a single user that's displayed in the
//userlist component
function UserItem(props) {
  const [isModalVisible, setShowModal] = useState(false);

  function showModal() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }
  //we accept the user a prop and display the user's information
  return (
    <div className="row item_down">
      <div className="col-sm-6 col-md-3">
        <b>Item or Service</b>
        <br />
        <div className="col-sm-6 col-md-3center">{props.user.noteTitle}</div>
      </div>
      <br />
      <div className="col-sm-6 col-md-5">
        <b>Date Purchased</b>
        <br />
        <div className="col-sm-6 col-md-5center">{props.user.noteDate}</div>
      </div>
      <br />
      <div className=" ccol-sm-6 col-md-2">
        <b>Amount Paid-GH¢</b>
        <br />
        <div className="col-sm-6  col-md-2center">{props.user.noteText}</div>
      </div>{" "}
      <br />
      <div className="col-sm-6  col-md-2">
        <p className="col-sm-6  col-md-2 ">
          <b>Expenses</b>
          <div className="down">
            <Button
              variant="success btn-xs"
              className="editbtn action"
              onClick={showModal}
            >
              Update
            </Button>
            {/* We setup edit user modal */}

            <Modal show={isModalVisible} onHide={hideModal}>
              <Modal.Header closeButton>
                <Modal.Title>Expense Update </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditUserForm user={props.user} hideModal={hideModal} />
              </Modal.Body>
            </Modal>
            <Button
              variant="danger btn-xs"
              className="action"
              onClick={() => {
                props.deleteUserAction(props.user.id);
              }}
            >
              Delete
            </Button>
          </div>
        </p>
      </div>
    </div>
  );
}

let mapDispatchToProps = {
  deleteUserAction,
};

let mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
