import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    longUrl: '',
  }

  handleChange = event => {
    this.setState({ longUrl: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const url = {
      longUrl: this.state.longUrl
    };

    axios.post(`http://localhost:9001/url`, { longUrl: this.state.longUrl })
      .then(
        res => {
        console.log(res);
        console.log(res.data);
        alert("This is the nano URL: http://localhost:9001/url/" + res.data)
      },err => {
        console.log(err);
        alert("This URL is not valid")
        
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            URL:
            <input type="text" name="longUrl" value={this.state.longUrl} onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}