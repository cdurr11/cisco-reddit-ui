import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: 'Please Enter Subreddit Name Here',
        NumberValue : '# of Articles',
        articles: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNumberChange = this.handleNumberChange.bind(this);
    }

  handleSubmit(event) {
    //catches if the value entered is not a number
      event.preventDefault();
      if (isNaN(this.state.NumberValue) === false) {
        const url = 'https://www.reddit.com/r/' + this.state.value.trim() + '/top/.json?limit=' + this.state.NumberValue;
        const data = fetch(url).then(response => response.json()).then(obj => this.parseAPIData(obj));
      }

      else {
        alert("A valid number was not specified");
      }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleNumberChange(event) {
    this.setState({NumberValue : event.target.value})
  }

  chopData (title) {
    //makes sure the title is not too long to fit
    if (title.length >= 100) {
      let newTitle = title.slice(0,100) + " ... ";
      return newTitle;
    }
    return title
  }

  parseAPIData (obj) {
    //parses the data from the API
    if (!("error" in obj)) {
      let finalArr = []
      const entries_arr = obj.data.children;
      for (let i = 0; i < entries_arr.length; i++) {
        let current_entry = entries_arr[i].data
        let title = this.chopData(current_entry.title)
        const concise_article_details = [title, current_entry.author, current_entry.url];
        finalArr.push(concise_article_details)
      }
      this.setState({articles: finalArr})
    }
    //catches if the API returns an error
    if ("error" in obj){
      if (this.state.value !== "Please Enter Subreddit Name Here") {
      alert("There was an error in handling your request | " + "Error: " + obj.error + ";" + " Message : " + obj.message + ";" + " Reason : " + obj.reason)
    }
  }
  }



  render() {

    return (
      <div className="Container">
        <div className = "Header">
          <form onSubmit={this.handleSubmit}>
            <input id = "subredditSubmit" type = "text" value = {this.state.value} onChange = {this.handleChange}/>
            <input id="numberSubmit" type = "text" value={this.state.NumberValue} onChange={this.handleNumberChange}/>
            <input type= "submit" value = "Submit"/>
          </form>
        </div>
        {/*Conditionally renders all of the queries that are returned
          Will render a maximum of the number of articles that articles
          specified by the user

          When clicking a returned query, it will open that article in a
          new window*/}
        <div className = "DisplayContainer">
          {this.state.articles.map((response) =>
            <div className="QueryReturn" onClick={()=> window.open(response[2], "_blank")}>
              <p>{response[0]}</p>
              <p> {"Written By: " + response[1]} </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
