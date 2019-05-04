import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quest: "None",
      stu_ans: "None",
      ref_ans: "None",
      model: "None"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    var g = "";
    var self = this;
    axios({
      url: 'https://asag-api.herokuapp.com/',
      method: 'post',
      data: data,
    })
    .then(function (response) {
      g = response.data.grade;
      console.log(response);
      self.setState({grade: g});
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Question: &nbsp;&nbsp;
            <input
              name="quest"
              type="text"
              checked={this.state.quest}
              onChange={this.handleInputChange} />
          </label>
          <br /><br />
          <label>
            Reference Answer:&nbsp;&nbsp;
            <input
              name="ref_ans"
              type="text"
              checked={this.state.ref_ans}
              onChange={this.handleInputChange} />
          </label>
          <br /><br />
          <label>
            Student Answer:&nbsp;&nbsp;
            <input
              name="stu_ans"
              type="text"
              checked={this.state.stu_ans}
              onChange={this.handleInputChange} />
          </label>
          <br /><br />
          <label>
            Model:&nbsp;&nbsp;
            <input
            type="radio"
            name="model"
            value="classifier"
            checked={this.state.model === 'classifier'}
            onChange={this.handleInputChange} /> Classifier
            <input
            type="radio"
            name="model"
            value="regressor"
            checked={this.state.model === 'regressor'}
            onChange={this.handleInputChange} /> Regressor
          </label>
          <br /><br />
          <label>
          Get Grade &nbsp;&nbsp;
            <input
              value="Submit"
              type="submit"/>
          </label>
        </form>
        <br/><br/><hr/><br/><br/>
        <div className="container" name="grade" value="">Grade : &nbsp;&nbsp;{this.state.grade}</div>
      </div>
    )
  }
}

export default Form;
