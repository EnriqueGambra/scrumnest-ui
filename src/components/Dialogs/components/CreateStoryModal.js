import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import BaseDialogComponent from "../BaseDialogComponent";

import { API, graphqlOperation } from "aws-amplify";

import * as mutations from "../../../graphql/mutations";

class CreateStoryModal extends BaseDialogComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      show: true,
    };
  }

  handleInputChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.title);

    // make mutation call to API
    API.graphql(
      graphqlOperation(mutations.createStory, {
        nestId: this.props.dialog.nestId,
        title: this.state.title,
      })
    ).then((value) => {
      this.handleClose(value);
    });
  };

  render() {
    return (
      <Modal show={this.state.show} onHide={() => this.handleClose(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Story</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="story name"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default CreateStoryModal;
