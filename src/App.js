import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      messages: []
    };
  }
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  addMsg = () => {
    const { messages, inputValue } = this.state;
    const newMsg = inputValue;
    this.setState({ messages: [...messages, newMsg], inputValue: "" });
  };
  render() {
    const { inputValue, messages } = this.state;
    const content = messages.map((message) => {
      return <p>{message}</p>;
    });
    return (
      <div>
        <input value={inputValue} onChange={this.handleChange} />
        <button onClick={this.addMsg}>Pass Message</button>
        {content}
      </div>
    );
  }
}

export default App;
