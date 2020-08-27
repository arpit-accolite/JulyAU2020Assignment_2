import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/List.css";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  handleChange(e, index) {
    let list = this.state.list;
    list[index] = e.target.value;
    this.setState({ list: list });
  }
  handleClickDelete(e) {
    let list = this.state.list;
    list.splice(e, 1);
    this.setState({ list: list });
  }
  handleClickEdit(e) {
    if (document.getElementById(e + "-icon").style.color === "green") {
      document.getElementById(e + "-icon").style.color = "grey";
      document.getElementById(e).disabled = true;
    } else {
      document.getElementById(e + "-icon").style.color = "green";
      document.getElementById(e).disabled = false;
    }
  }
  handleClick(e) {
    e.preventDefault();
    if (document.getElementById("inputfield").value.length != 0) {
      this.state.list.push(document.getElementById("inputfield").value);
      document.getElementById("inputfield").value = "";
      this.setState({ list: this.state.list });
    }
  }
  render() {
    return (
      <div>
        <Form id="submit-list" onSubmit={(e) => this.handleClick(e)}>
          <Form.Group>
            <Form.Control
              type="text"
              id="inputfield"
              placeholder="Add a Task"
            />
          </Form.Group>
          <Button type="submit" id="submitbtn">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Form>
        <h5>To Do List</h5>

        {this.state.list.map((list, index) => (
          <div className="list-item" key={index}>
            <input
              id={index}
              value={list}
              onChange={(e) => {
                this.handleChange(e, index);
              }}
              disabled
            />

            <FontAwesomeIcon
              id={index + "-icon"}
              className="edit"
              icon={faEdit}
              onClick={() => {
                this.handleClickEdit(index);
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="delete"
              onClick={(index) => {
                this.handleClickDelete(index);
              }}
            />
          </div>
        ))}
        <p>Click on edit icon to edit field and click it again to save</p>
      </div>
    );
  }
}

export default List;
