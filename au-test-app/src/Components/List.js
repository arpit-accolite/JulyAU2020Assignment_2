import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../styles/List.css"
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  handleClick(e) {
    e.preventDefault();
    if(document.getElementById("inputfield").value.length!=0)
 {   this.state.list.push(document.getElementById("inputfield").value);
    document.getElementById("inputfield").value = "";
    this.setState({ list: this.state.list });
  }
}
  render() {
    return (
      <div>
       
        <Form id="submit-list" onSubmit={(e) => this.handleClick(e)}>
        <Form.Group >
          <Form.Control type="text" id="inputfield" placeholder="Add a Task"/>
          </Form.Group>
          <Button type="submit" id="submitbtn"><FontAwesomeIcon icon={faPlus} /></Button>

        </Form>
        <h5>To Do List</h5>


        {this.state.list.map((list, index) => (
          <div className="list-item" key={index}>{list}</div>
        ))}
      </div>
    );
  }
}

export default List;
